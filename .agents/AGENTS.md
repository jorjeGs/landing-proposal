# Project Rules

## Static Asset Management (assets/ folder)

### Purpose
Store all static resources such as:
- images
- icons
- illustrations
- fonts
- background graphics
- design assets

### Instructions
1. Treat the `/assets` folder as the main location for all static resources.
2. Whenever the user adds, moves, renames, or modifies files inside this folder:
   - Detect the change.
   - Confirm the update.
   - Process the file if needed (optimize, link, or update paths in code).
3. Ensure all references in HTML, CSS, and JavaScript correctly point to the assets folder.
4. If any asset is unused or incorrectly linked, notify the user.
5. Maintain a clean project structure when referencing assets.

### Important Rules
- Do NOT modify any unrelated files.
- Do NOT change layout, styling, or functionality unless required to connect the asset.
- Always confirm the changes you detect before applying modifications.

### Workflow
Whenever the user says "I added new assets" or "I updated assets", scan the assets folder and verify everything is correctly integrated.
