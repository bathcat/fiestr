# FiestaR

Learn how to build apps with React.

---

## Contents

- [Overview](#overview)
- [Outline](#outline)
- [Setup](#setup)
- [Recipes](#recipes)

---

## Overview

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae finibus ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse venenatis velit tincidunt suscipit bibendum. Nulla at bibendum leo. Mauris non ipsum sed massa congue gravida sed sit amet mi. Praesent quis congue nibh, nec elementum est. Nulla congue lacinia hendrerit. Aenean et mauris malesuada, sollicitudin dui vel, posuere ipsum. Duis eget rhoncus massa. Maecenas eu metus neque. Cras sed pretium nisl.

In viverra velit a lacus congue, vitae ultrices nunc maximus. Quisque ligula tortor, porta vitae arcu vulputate, laoreet gravida libero. Mauris viverra volutpat interdum. Nulla ultricies imperdiet tincidunt. Praesent tincidunt convallis semper. Phasellus viverra nisl sed risus tincidunt, a consequat quam porta. Donec ut pretium purus. Vivamus ornare efficitur mauris, iaculis cursus tortor vestibulum ac. Curabitur ac lorem pharetra, semper turpis quis, sodales orci. Cras eu dui convallis, faucibus sem ut, tempus massa. Proin suscipit ipsum lobortis eros feugiat tempor. Phasellus et massa condimentum, malesuada erat id, pellentesque massa. Quisque pharetra augue elit, ac fermentum lorem tincidunt ut.

<br/>

### Objectives

After this course, you will be able to:

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Sed vitae finibus ligula.

<br/>

### Duration

This course will be delivered in 1.5 days

<br/>

---

## Outline

- Introduction to React

  - The Virtual DOM
  - Creating a React App
  - Managing Component State
  - Working with JSX

- Working with Components

  - Classes vs Hooks
  - Understanding and Passing Props
  - Understanding Component Lifecycle Hooks
  - Handling Events
  - Controlled & Uncontrolled Components

- Managing State

  - Options and Tradeoffs
  - Hand-rolled State
  - Introduction to Zustand

- Routing
  - Lorem ipsum

---

## Setup

Everything works with npm and node-- any recent version should be fine.

#### Chose one of the options below. Then, to test that your setup is working:

1. Open a terminal
2. Navigate to the repository
3. Install dependencies:
   ```shell
   npm install
   ```
4. Run the project
   ```shell
   npm run dev
   ```

<!-- If everything works right, you'll see something like this:
<img src='.assets/screenshot.bazel-run.png'> -->

<br/>
<br/>

### Option 1: Github CodeSpaces

With just a free account, you can run VSCode (or some version thereof) with Docker in your browser.

#### Advantages

- Zero installation

#### Disadvantages

- Takes a _while_ to download container images
- Free version limits time an space
- It's a hassle to view artifacts-- e.g. test coverage reports

#### Steps:

1. In a browser, navigate to https://github.com/bathcat/fiestr
2. Click **Code** > **Codespaces** > **Create codespace on main**

<!-- <img src='.assets/screenshot.codespaces.0.png'>
<img src='.assets/screenshot.codespaces.1.png'> -->
<br/>
<br/>

### Option 2: Docker (with VSCode)

Docker abstracts all software requirements, and VSCode works really well with containers. Read up on [Developing Inside a Container](https://code.visualstudio.com/docs/devcontainers/containers)

#### Advantages

- Less configuration
- Repeatable environment setup
- Artifacts live on your local filesystem

#### Disadvantages

- Takes a _while_ to set up the environment
- You need Docker
- If your favorite editor _isn't_ VSCode, you'll need to play around getting that set up

#### Tools

1. [Docker](https://www.docker.com/get-started/)
2. [VSCode](https://code.visualstudio.com/)
3. [Remote Development extension pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

#### Steps

1. Clone repo
2. Open in VSCode
3. **F1** > **Dev Containers: Reopen in Container**

<!-- <img src='.assets/screenshot.reopen-in-container.png'> -->

<br/>
<br/>

### Option 3: On the Metal

There's nothing magical about this setup: it's node and npm and a couple less-important bits for debugging and code coverage. So if you don't want to mess with containers, that's ok too.

#### Advantages

- Everything is local
- No messing with containers
- Use your favorite IDE
- No time wasted downloading container images

#### Disadvantages

- I only tested this on Windows
- Weird stuff might happen if our versions are different

#### Tools

1. [Node](https://nodejs.org/en)
2. Your favorite text editor

#### Steps

1. Clone repo
2. Open in your favorite editor

<br/>
<br/>

---

## Recipes

dLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae finibus ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse venenatis velit tincidunt suscipit bibendum. Nulla at bibendum leo. Mauris non ipsum sed massa congue gravida sed sit amet mi. Praesent quis congue nibh, nec elementum est. Nulla congue lacinia hendrerit. Aenean et mauris malesuada, sollicitudin dui vel, posuere ipsum. Duis eget rhoncus massa. Maecenas eu metus neque. Cras sed pretium nisl.

In viverra velit a lacus congue, vitae ultrices nunc maximus. Quisque ligula tortor, porta vitae arcu vulputate, laoreet gravida libero. Mauris viverra volutpat interdum. Nulla ultricies imperdiet tincidunt. Praesent tincidunt convallis semper. Phasellus viverra nisl sed risus tincidunt, a consequat quam porta. Donec ut pretium purus. Vivamus ornare efficitur mauris, iaculis cursus tortor vestibulum ac. Curabitur ac lorem pharetra, semper turpis quis, sodales orci. Cras eu dui convallis, faucibus sem ut, tempus massa. Proin suscipit ipsum lobortis eros feugiat tempor. Phasellus et massa condimentum, malesuada erat id, pellentesque massa. Quisque pharetra augue elit, ac fermentum lorem tincidunt ut.
