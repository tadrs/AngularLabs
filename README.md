# Lab1

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Angular Development Documentation

## 1. SPA vs. MPA
| Feature | Single Page Application (SPA) | Multi-Page Application (MPA) |
| :--- | :--- | :--- |
| **Definition** | Loads a single HTML page and dynamically updates content. | Requests a new HTML page from the server for every interaction. |
| **Rendering** | Client-side (Browser handles updates). | Server-side (Server sends full pages). |
| **Navigation** | No page reloads; feels fluid like a mobile app. | Visible page reloads; traditional website feel. |
| **Example** | Gmail, Facebook, Angular Apps. | Wikipedia, Amazon, eBay. |

---

## 2. MVC vs. MVVM in Angular
In the context of Angular, these patterns define how data flows through the application:

* **MVC (Model-View-Controller):** A pattern where the **Model** (data) and **View** (UI) are managed by a **Controller** (logic). In simple terms, the controller tells the view exactly what to show.
* **MVVM (Model-View-ViewModel):** Angular follows this more closely. The **ViewModel** (the `.ts` class) acts as a bridge. It uses **Data Binding** to sync the Model and View automatically. When you change a variable in your TypeScript, the HTML updates without you having to write manual "update" code.

---

## 3. Component File Structure
An Angular component is divided into four specific files, each with a unique purpose:

* **`.ts` (TypeScript):** The logic layer. Defines properties, methods, and manages the component's data.
* **`.html` (HTML):** The structure layer. Defines the layout and what is rendered in the DOM.
* **`.css` (CSS):** The presentation layer. Contains styles scoped specifically to this component.
* **`.spec.ts` (Unit Test):** The testing layer. Used for writing automated tests to ensure the component behaves correctly.

---

## 4. Interpolation
**Interpolation** is a form of one-way data binding in Angular that allows you to display dynamic data from your TypeScript class in your HTML template.

* **Syntax:** It uses double curly braces: `{{ expression }}`.
* **Purpose:** It evaluates a string, variable, or function result from the `.ts` file and renders it directly into the text of your HTML.
* **Example:** `<h3>Student Name: {{ student.name }}</h3>`
