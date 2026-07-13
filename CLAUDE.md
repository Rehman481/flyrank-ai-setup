# Development Rules

Guidelines for human and AI-assisted development on the FlyRank AI Internship Capstone.

## Project Context

- **Repository:** FlyRank AI Internship Capstone
- **Author:** Rehman Asif
- **Stack:** JavaScript, Node.js 18+
- **License:** MIT

When generating or editing code, read existing files first and match the patterns already in the repository.

## Tech Stack

- **Runtime:** Node.js 18 or later
- **Language:** JavaScript (ES modules unless the project config specifies otherwise)
- **Version control:** Git with Conventional Commits
- **AI tooling:** Cursor AI

## Coding Style

### General

- Write clear, readable code over clever one-liners.
- Use meaningful names for variables, functions, and files.
- Keep functions small and focused on a single responsibility.
- Prefer early returns to reduce nesting.
- Remove dead code and unused imports when editing a file.
- Add comments only for non-obvious logic — not for self-explanatory code.

### JavaScript / Node.js

- Use `const` by default; use `let` only when reassignment is required.
- Prefer `async/await` over raw Promise chains.
- Validate external input at module boundaries (CLI args, API payloads, file reads).
- Handle errors explicitly — avoid empty `catch` blocks.
- Use environment variables for secrets and configuration; never hardcode API keys or tokens.
- Log errors with enough context to debug, but never log secrets.

### File and Folder Conventions

```
src/           # Application source code
scripts/       # One-off or utility scripts
tests/         # Test files (mirror src/ structure)
docs/          # Additional documentation
```

- Use lowercase kebab-case for file and folder names (e.g. `user-service.js`).
- One primary export per module unless a small, related group makes sense.
- Keep configuration in root-level files (`package.json`, `.env.example`).

## Git Workflow

### Conventional Commits

Format: `<type>: <short description>`

| Type | When to use |
|------|-------------|
| `feat:` | New feature or capability |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `style:` | Formatting, no logic change |
| `refactor:` | Code change that is not a fix or feature |
| `test:` | Adding or updating tests |
| `chore:` | Maintenance, dependencies, tooling |

Examples:

```
feat: add CLI entry point for data export
fix: handle missing env variable on startup
docs: update README setup instructions
```

### Commit Practices

- Make small, focused commits — one logical change per commit.
- Do not commit generated files (`node_modules/`, build output) or secrets (`.env`).
- Write commit messages in the imperative mood ("add feature", not "added feature").
- Do not amend or force-push unless explicitly requested.

## AI Assistant Rules

Cursor AI is used to generate code, improve documentation, refactor, and answer programming questions. Follow these rules when working with AI output.

### Before Writing Code

1. Read relevant existing files to understand current patterns.
2. Confirm the requested change scope — avoid unrelated edits.
3. Check `README.md` and this file for project conventions.

### When Generating Code

- Produce the **smallest correct change** that solves the task.
- Reuse existing functions and modules instead of duplicating logic.
- Match the naming, formatting, and structure of surrounding code.
- Do not add dependencies without a clear reason.
- Do not add tests, comments, or error handling beyond what the task requires.
- Prefer editing existing files over creating new ones unless a new module is justified.

### When Reviewing AI Output

- Read every suggested change before accepting it.
- Verify imports, function signatures, and file paths are correct.
- Run or mentally trace the code path for edge cases.
- Reject changes that introduce unrelated refactors or scope creep.

### Security

- Never commit `.env`, credentials, API keys, or tokens.
- Never paste secrets into AI prompts.
- Use `.env.example` with placeholder values when documenting required environment variables.
- Treat all external input as untrusted.

### Documentation

- Update `README.md` when setup steps, project structure, or usage changes.
- Keep documentation accurate — mark unfinished features as "coming soon" rather than documenting them as complete.

## Quality Checklist

Before considering a task complete:

- [ ] Code follows the conventions in this file
- [ ] No secrets or generated artifacts are staged
- [ ] Error cases are handled where relevant
- [ ] Commit message follows Conventional Commits
- [ ] Documentation is updated if behavior or setup changed
## Project Rules Learned

1. Always use TypeScript interfaces for component state and props.
2. Every form should include validation and accessible labels.
3. AI-generated code must be reviewed and tested before committing.