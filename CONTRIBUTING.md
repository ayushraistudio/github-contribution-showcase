Contributing to GitHub-Contribution-Showcase

Thank you for your interest in contributing to GitHub-Contribution-Showcase! We welcome contributions that improve the project's visual appeal, maintainability, and developer experience.

GitHub-Contribution-Showcase is a dynamic API that generates contribution trophies using customizable SVG themes. We encourage contributors to create original, visually appealing, accessible, and beginner-friendly themes.

This guide explains how to add a new theme, test your changes, and submit a pull request.

Table of Contents

- "Getting Started" (#getting-started)
- "Adding a New SVG Theme" (#adding-a-new-svg-theme)
- "SVG Design Requirements" (#svg-design-requirements)
- "Using Existing Data" (#using-existing-data)
- "Testing Your Theme" (#testing-your-theme)
- "Contribution Workflow" (#contribution-workflow)
- "Pull Request Guidelines" (#pull-request-guidelines)
- "Common Reasons for Rejection" (#common-reasons-for-rejection)
- "Final Checklist" (#final-checklist)

Getting Started

You do not need a local development environment to contribute. You can make changes directly through the GitHub web interface or GitHub mobile app.

If you prefer working locally, you can clone your fork and use your preferred code editor.

Before making changes, familiarize yourself with the existing theme definitions in:

"src/generateTrophy.js"

Important: Follow the existing code structure and conventions. Do not replace existing themes or modify unrelated API logic.

Adding a New SVG Theme

Step 1: Choose a Theme Name

Choose a short, descriptive, and unique name that reflects your design.

Examples:

- "neon"
- "cyberpunk"
- "minimal"
- "retro"

Avoid names that are ambiguous, offensive, or already used by another theme.

Step 2: Review the Existing Implementation

Open "src/generateTrophy.js" and inspect how existing themes are defined.

Before using any data property, verify that it is available in the existing "data" object.

Step 3: Create Your Theme

Add your new theme using the same structure as the existing theme definitions.

The following SVG illustrates a basic theme. Adapt it to the project's actual syntax and rendering logic.

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="800"
  height="250"
  viewBox="0 0 800 250"
>
  <rect width="800" height="250" fill="#111827" />

  <text
    x="400"
    y="120"
    text-anchor="middle"
    fill="#ffffff"
    font-size="28"
  >
    Contributions: ${data.total_contributions}
  </text>
</svg>

This example demonstrates the required SVG dimensions and dynamic use of contribution data. It is an illustrative snippet, not a replacement for the existing theme structure.

SVG Design Requirements

Every submitted theme must satisfy the following requirements.

Required

- Use SVG markup exclusively.
- Use "<svg>" as the root element.
- Include "xmlns="http://www.w3.org/2000/svg"".
- Set "width="800"" and "height="250"".
- Set "viewBox="0 0 800 250"".
- Use only properties supported by the existing "data" object.
- Keep the theme self-contained, with no external dependencies.
- Ensure the SVG renders correctly within the fixed canvas.
- Follow the existing project's conventions.

Not Allowed

- Raster images, including PNG, JPG, GIF, and WebP.
- External or local image references through "<image>" elements.
- External fonts or stylesheets.
- External assets or URLs required for rendering.
- Hardcoded GitHub usernames or fabricated statistics.
- Unsupported data properties.
- Changes to unrelated API logic.
- Unnecessary modifications to existing themes.

Using Existing Data Correctly

Themes are generated dynamically for different GitHub users. All user-specific information and contribution statistics must come from the existing data object.

For example, if the project supports "data.total_contributions", you may use:

${data.total_contributions}

Do not hardcode a username or contribution count.

Before using a property, verify that it exists in the current implementation. Do not introduce new data fields unless the project already supports them.

Canvas and Layout Guidelines

Every theme must use the fixed canvas dimensions:

Property| Required value
Width| "800"
Height| "250"
ViewBox| "0 0 800 250"

For the best visual results:

- Keep text readable and properly aligned.
- Maintain sufficient contrast between text and background.
- Avoid clipping, overflow, and unnecessary visual clutter.
- Use consistent spacing and a clear visual hierarchy.
- Ensure important content remains inside the canvas.

Creative designs are welcome, provided they follow the technical requirements.

Testing Your Theme

Test your changes using the Vercel preview deployment associated with your branch or pull request.

The API URL follows this format:

"https://your-preview-url.vercel.app/api?username=your_username&theme=your_theme_name"

Replace the placeholders with the actual preview URL, a GitHub username for testing, and your theme's exact name.

Verify the following before submitting your pull request:

1. The API returns a valid SVG.
2. The SVG dimensions are exactly "800 × 250".
3. The design renders correctly without clipping or layout issues.
4. User-specific information is populated dynamically.
5. No external assets or fonts are required.
6. Existing themes continue to work.

If the preview fails or the SVG renders incorrectly, resolve the issue before submitting your changes.

Contribution Workflow

Follow these steps to contribute:

1. Fork the repository to your GitHub account.
2. Open "src/generateTrophy.js" in your fork.
3. Add your new theme while preserving the existing implementation.
4. Commit your changes to your fork or a dedicated branch.
5. Test the theme using the Vercel preview deployment.
6. Open a pull request against the original repository.

You can complete this workflow using the GitHub web editor or mobile app. A local development setup is optional.

Pull Request Guidelines

One Theme Per Pull Request

Submit only one new theme per pull request.

If you create multiple themes, submit a separate pull request for each one. This allows maintainers to review, test, and merge contributions independently.

Keep Changes Focused

A theme-related pull request should include only the changes necessary to introduce that theme.

Please avoid:

- Unrelated refactoring or formatting changes.
- Modifying existing themes unnecessarily.
- Changing API behavior.
- Removing existing functionality.
- Updating dependencies without a clear requirement.
- Including multiple unrelated features.

Describe Your Contribution Clearly

Your pull request description should briefly explain:

- The name of the new theme.
- Its visual concept or design approach.
- The changes made.
- The testing performed and its results.

Clear descriptions help maintainers review contributions efficiently.

Common Reasons for Rejection

A pull request may require changes if it:

- Uses incorrect SVG dimensions or omits the required namespace.
- Depends on external images, fonts, stylesheets, or assets.
- Hardcodes usernames or contribution statistics.
- References unsupported data properties.
- Produces invalid, incomplete, or visually broken SVG.
- Breaks existing themes or API functionality.
- Includes multiple themes in a single pull request.
- Contains unrelated changes.
- Lacks a clear explanation of the contribution.

Final Checklist

Before submitting your pull request, confirm that:

- [ ] I added my theme to "src/generateTrophy.js".
- [ ] The theme uses SVG markup exclusively.
- [ ] The SVG dimensions are exactly "800 × 250".
- [ ] The SVG includes the correct namespace.
- [ ] I did not use external images, fonts, or assets.
- [ ] I used only supported properties from the existing data object.
- [ ] I did not hardcode usernames or contribution statistics.
- [ ] I tested the theme using the Vercel preview API.
- [ ] Existing themes and API functionality remain unaffected.
- [ ] My pull request contains only one new theme.
- [ ] I excluded unrelated changes.
- [ ] My pull request description clearly explains the changes.

Thank You for Contributing

We appreciate your time and effort in improving GitHub-Contribution-Showcase.

Every thoughtful contribution helps make the project more creative, reliable, and welcoming to developers of all experience levels.

Happy contributing!
