# Fileflow — Digital Document Management System

Fileflow is a responsive, frontend-only document management workspace built to organize document metadata and simulate common library workflows. It addresses the problem of scattered records by bringing document discovery, ownership, categories, departments, activity and reporting into one interface.

## Technologies

React 18, Vite, JavaScript ES modules, React Router, Material UI, MUI DataGrid, Recharts, HTML5/CSS, and browser `localStorage`.

## Installation and run

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production build with `npm run build`; preview it with `npm run preview`.

## Features and pages

- **Welcome / Login** — demo sign-in; no credentials are sent to a server.
- **Dashboard** — live library metrics, uploads, recent activity, category distribution, department counts, most-accessed files and simulated storage summary.
- **Documents** — searchable, paginated MUI DataGrid with category, department, type, status, favorite, uploader, upload-date and file-size filters. Search includes file name, title, number, description, category, department, tags and uploader.
- **Document details** — dynamic `/documents/:documentId` route with overview, metadata, activity history and related documents.
- **Upload document** — selects a local file to read its name, type and size, then stores metadata only.
- **Categories / Departments** — add, edit, search, count and view associated records; removal is prevented while documents still use an entry.
- **Favorites** — favorite documents can be opened, downloaded, edited/renamed and deleted from the library actions.
- **Recent** — sorted by last access, updated when a document is opened or downloaded.
- **Trash** — restore deleted records or permanently delete them after confirmation.
- **Reports** — Recharts views for category, department, file type, monthly uploads, access activity and favorite split.

## Document workflow

Upload a supported file (PDF, Word, Excel, PowerPoint, text, image or CSV), fill in title, category, department and uploader, and save. Fileflow creates a unique `DOC-YYYY-NNNN` number and stores metadata in the browser. Details and table actions let you view, favorite, rename, edit, simulate a download or move the record to Trash. Activity, recent access, dashboard counts and charts derive from current application data.

### Upload and download simulation

The browser file picker is used only to read file metadata. File bytes are not uploaded or saved. The download action increments a counter and records the access event; it explicitly reports “Download simulated successfully.”

### Persistence and sample data

The first run seeds 108 varied document records, 10 categories and 8 departments, including archived and deleted examples, multiple uploaders, tags, dates and favorite states. Documents, categories, departments, favorites and activity are persisted under `documents`, `documentCategories`, `departments`, `documentFavorites` and `documentHistory`. Clearing site storage resets the demo data. Invalid or missing JSON is handled by safe defaults.

All operations are local to the browser. There is no backend, database, external API, server-side file storage or real authentication. Data is device/browser specific and is not suitable for confidential production documents.

## Screenshots

The requested route screenshots could not be captured in this managed session. Headless Edge and Chrome failed to initialize graphics, and Firefox failed to map its framebuffer. No blank images are included as if they were valid screenshots. Capture the running app routes and place the resulting images under `screenshots/` before submission. The full requirement-by-requirement status is in [DOCX_REQUIREMENTS_AUDIT.md](DOCX_REQUIREMENTS_AUDIT.md).

## Future improvements

Add role-based access and real authentication, a backend document store, audit export, richer date and size filters, and an automated browser screenshot workflow when those services and tools are in scope.
