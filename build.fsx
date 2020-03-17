#r @"packages/build/FAKE/tools/FakeLib.dll"
#r @"packages/build/Corns.Fake/lib/net451/Corns.Fake.dll"

open Fake
open Fake.NpmHelper
open Fake.Git
open Fake.AssemblyInfoFile

open Corns.Fake.Versioning
open Corns.Fake.Git

open System
open System.IO

Environment.CurrentDirectory <- __SOURCE_DIRECTORY__

let release = ReleaseNotesHelper.parseReleaseNotes (File.ReadLines "RELEASE_NOTES.md")
let buildDir = @"dist\npm"


Target "Clean" (fun _ ->
    CleanDirs [ buildDir ]
)


Target "Build" (fun _ ->
    match getVersion (release.SemVer) __SOURCE_DIRECTORY__ with
    | Some(v) ->
        Npm (fun p ->
              { p with
                  Command = Install Standard
                  WorkingDirectory = __SOURCE_DIRECTORY__
              })
        Npm (fun p ->
              { p with
                  Command = (Custom (sprintf "version %d.%d.%d --allow-same-version --no-git-tag-version --no-commit-hooks" v.Major v.Minor v.Patch))
                  WorkingDirectory = __SOURCE_DIRECTORY__
              })
        Npm(fun p ->
              { p with
                  Command = (Run "build:lib")
                  WorkingDirectory = __SOURCE_DIRECTORY__
              })
    | None -> traceError "Версию не удалось вычислить, пакет не собран."
)

Target "Lint" (fun _ ->
   Npm (fun p ->
        { p with
            Command = (Run "lint")
            WorkingDirectory = __SOURCE_DIRECTORY__
        })
)

Target "RunTests" (fun _ ->
    Npm (fun p ->
        { p with
            Command = (Run "test:chromeheadless")
            WorkingDirectory = __SOURCE_DIRECTORY__
        })
)

Target "PublishNpm" (fun _ ->
    match getVersion (release.SemVer) __SOURCE_DIRECTORY__ with
    | Some(v) ->
                tracefn "%A" buildServer
                if not isLocalBuild then
                    (sprintf "tag -a v%s -m \"successful build tagging\"" <| v.ToString()) |> runGitCommand __SOURCE_DIRECTORY__ |> ignore
                    "push origin --tags" |> runGitCommand __SOURCE_DIRECTORY__ |> ignore

                    Npm (fun p ->
                        { p with
                            Command = (Custom "publish")
                            WorkingDirectory = buildDir
                        })
    | None -> traceImportant "Версию не удалось вычислить, пакет не собран."
)

Target "All" DoNothing

"Clean"
  ==> "Build"
  ==> "RunTests"
  ==> "Lint"
  ==> "PublishNpm"
  ==> "All"

RunTargetOrDefault "All"
