---
sidebar_label: Roadmap
Description: See what's on the roadmap of Kargo and find out more about the latest releases
---

# Kargo Roadmap

Over a series of releases, Kargo's maintainers have settled into a cadence of a
minor release roughly every five weeks, with two or three major features
completed per release.

:::caution
This roadmap tracks only _major_ features and is subject to change at any time,
for the most up-to-date information, please see the [GitHub
Project](https://github.com/akuity/kargo/milestones)
:::

## In Progress

### v1.1.0

__Expected:__ 22 November 2024

This release will focus on improving the flexibility of the promotion steps
introduced in v0.9.0 through the addition of support for an expression language.

This release also kicks off a three phase plan with the end goal of enabling
custom/third-party promotion steps.

## Upcoming

### v1.2.0

This release is to be the second phase of three advancing Kargo toward support
for custom/third-party promotion steps, with a focus on ensuring a secure and
isolated execution environment for those steps.

### v1.3.0

The third and final phase of the three advancing Kargo toward support for
custom/third-party promotion steps will focus on:

* Establishing a formal specification for developers wishing to implement their
  own promotion steps.

* Building the mechanisms whereby operators may install and users may leverage
  versioned, custom/third-party promotion steps.

### v1.4.0 and Beyond

* Packaging common workflows as pre-defined, composite promotion steps.
* TBD

## Completed

### v1.0.0

v1.0.0 was our long-anticipated GA release containing only small features,
bug fixes, stability improvements, and the final removal of the legacy
promotion mechanisms that were deprecated in v0.9.0.

### v0.9.0

| Name | Type | Description |
| ---- | ---- | ----------- |
| [Promotion Steps](https://github.com/akuity/kargo/issues/2219) | strategic refactor | Transitioned from opinionated promotion mechanisms to an ordered lists of more finely-grained promotion directives steps reminiscent of GitHub Actions. These enable greater flexibility in addressing outlying use cases and have left us with a clear path forward for to eventually enable third-party integrations. |
| Production Readiness | chore | <ul><li>Prioritized stability of existing features.</li><li>Paid down technical debt.</li><li>**This does not mean v0.9.0 is production-ready. It means it is several steps closer to it.**</li></ul> |

### v0.8.0

| Name | Type | Description |
| ---- | ---- | ----------- |
| Auth via [GitHub Apps](https://docs.github.com/en/apps) | feature | Support GitHub Apps as an authentication option for GitHub repositories. |
| Multiple `Freight` per `Stage` | feature | Permit `Stage`s to host multiple pieces of `Freight` from different `Warehouse`s. Different artifacts, or sets of artifacts, can be promoted through parallel pipelines with different/independent cadence. |
| Production Readiness | chore | <ul><li>Prioritized stability of existing features.</li><li>Paid down technical debt.</li><li>**This does not mean v0.8.0 is production-ready. It means it is several steps closer to it.**</li></ul> |

### v0.7.0

| Name | Type | Description |
| ---- | ---- | ----------- |
| Multiple `Warehouse`s | feature | Improved UI support for displaying Freight from multiple `Warehouse`s. |
| Manual `Freight` Creation | feature | Added UI feature for manual `Freight` creation. |
| ECR/GAR Support | feature | Added multiple options for authenticating to image repositories in ECR and Google Artifact Registry, including support for EKS Pod Identity and GKE Workload Identity Federation. | 
| [Patch Promotions](https://github.com/akuity/kargo/issues/1250) | poc | Support a generalized option to promote arbitrary configuration (e.g. strings, files, and directories) to other paths of a GitOps repository. |
| Production Readiness | chore | Prioritized stability of existing features. **This does not mean v0.7.0 is production-ready. It means it is several steps closer to it.** |

### v0.6.0

| Name | Type | Description |
| ---- | ---- | ----------- |
| Project Management | feature | Added user / role / permission management capabilities to the CLI and UI. |
| Events | feature | Kargo emits noteworthy events as Kubernetes events. Events are also viewable in the UI. |
| Production Readiness | chore | Prioritized stability of existing features. **This does not mean v0.6.0 is production-ready. It means it is several steps closer to it.** |

### v0.5.0

| Name | Type | Description |
| ---- | ---- | ----------- |
| `Warehouse` Rules/Filters | feature | Introduced optional path-based constraints on Git repository subscriptions. |
| Credential Storage | refactor | Simplified and streamlined format and storage of repository credentials. |
| Credential Management | feature | Added credential management capabilities to the CLI and UI. |
| CLI Improvements | refactor | Overhauled the CLI to make the tree of sub-commands more intuitive, with improved consistency in usage and documentation from command to command. |
| UI Improvements | feature | Achieved near-parity with CLI features. |

### v0.4.0

| Name | Type | Description |
| ---- | ---- | ----------- |
| `Warehouse` Rules/Filters | feature | Introduced optional tag-based constraints on Git repository subscriptions. |
| Project Management | feature | <ul><li>Introduced `Project` CRD to simplify project initialization.</li><li>Removed `PromotionPolicy` CRD and folded its functionality directly into the `Project` CRD.</li></ul> |

### v0.3.0

| Name | Type | Description |
| ---- | ---- | ----------- |
| GitHub PR-Based Promotion | feature | Pull request-based promotions are now supported on GitHub. |
| Verifications | feature | `Stage` resources can now execute a user-defined verification process after a promotion. These can be defined using Argo Rollouts `AnalysisTemplate` resources, and executions take the form of `AnalysisRun` resources. |
| Improved RBAC | feature | SSO user identities can now be mapped to Kubernetes `ServiceAccount` resources using annotations. |

### v0.2.0

| Name | Type | Description |
| ---- | ---- | ----------- |
| `Freight` CRD | feature | Freight changed from being a property of a `Stage`, to being its own `Freight` CRD. |
| `Warehouse` CRD | feature | `Freight` production was decoupled from a pipeline's first `Stage` and now comes from a `Warehouse`. |
| Kargo Render | breaking change | The Bookkeeper project was rebranded as Kargo Render -- a Kargo sub-project for rendering manifests. |