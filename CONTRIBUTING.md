# Contributing Guidelines

We use **Conventional Commits** to ensure clear, consistent commit messages, making it easier to automate versioning and changelogs. Please follow the format below when making commits.

## Commit Message Structure

    <type>(<scope>): <description>

    [optional body]

    [optional footer(s)]

## Commit Types

- **feat**: New feature (Minor version bump)
- **fix**: Bug fix (Patch version bump)
- **BREAKING CHANGE**: Major change (Major version bump)
- **chore**, **docs**, **style**, **refactor**, **test**, etc.: Other types (No version bump unless BREAKING CHANGE is included)

## Examples

- `feat(auth): add login feature`
- `fix(api): handle request timeouts`
- `feat!: update config API`
  _BREAKING CHANGE: config format changed_
- `chore: update dependencies`

## Footers

- **BREAKING CHANGE**: Describes breaking changes.
- **Refs**: References to issues or related PRs.

---

## Why Follow This?

- **Automate changelog generation**
- **Determine version bumps automatically**
- **Help contributors understand the impact of changes**
