# Sex Lives Report Website

**Core technologies:**

- [Astro.js](https://docs.astro.build/en/getting-started/)
- [TailwindCSS](https://tailwindcss.com/docs/installation)

**Testing libraries:**

- [Cypress](https://www.cypress.io/)

**Other libraries & packages:**

- [React](https://react.dev/reference/react)
- [GSAP](https://greensock.com/docs/)
- [Locomotive Scroll V5](https://scroll.locomotive.ca/docs/#/?id=locomotive-scroll-v5)
- [Swiper.js](https://swiperjs.com/)
- [Chart.js](https://www.chartjs.org/)
- [react-icons](https://www.npmjs.com/package/react-icons)

**MailChimp Newsletter Subscribtion:**

Users can subscribe to the MailChimp newsletter by entering a valid email address and clicking the subscribe button.

The underlying process involves making a POST request to an **Azure Lambda Function**, which utilizes the **MailChimp Marketing API** to manage user subscriptions. In the event that a user is already subscribed, the function will update the existing user's information with the new tag, still providing a successful result with an HTTP status code of 200.

Due to the utilization of Astro JS in the project, direct access to the MailChimp Marketing API is not feasible due to CORS (Cross-Origin Resource Sharing) limitations. Therefore, an Azure Serverless Function acts as an intermediary to facilitate communication between the project and the MailChimp API.

## 🚀 Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
