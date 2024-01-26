---
title: "Exhibit B"
subtitle: "Sample Exhibit with a Simple Timeline Component"
author: Brandon
layout: "page"
permalink: "/exhibits/exhibit-b.html"
timeline:
  - year: 1980
    title: Title One
    description: >
      Ut eleifend lacus at erat efficitur bibendum. Ut laoreet elit nec dolor molestie finibus.
  - year: 1990
    title: Title Two
    description: >
      Ut eleifend lacus at erat efficitur bibendum. Ut laoreet elit nec dolor molestie finibus.
  - year: 2000
    title: Title Three
    description: >
      Ut eleifend lacus at erat efficitur bibendum. Ut laoreet elit nec dolor molestie finibus.
  - year: 2010
    title:  Title Four
    description: >
      Ut eleifend lacus at erat efficitur bibendum. Ut laoreet elit nec dolor molestie finibus.
  - year: 2023
    title:  Title Five
    description: >
      Ut eleifend lacus at erat efficitur bibendum. Ut laoreet elit nec dolor molestie finibus.
---

Ut eleifend lacus at erat efficitur bibendum. Ut laoreet elit nec dolor molestie finibus. Vivamus justo risus, scelerisque nec dolor ut, pretium fringilla purus. Nam nisl erat, tristique ac libero vitae, bibendum pellentesque nulla. Praesent accumsan ut mauris ut euismod. Etiam mattis a justo eget blandit. Aliquam vitae magna eget nisi suscipit finibus id sit amet nulla.

## Timeline

<ul class="timeline timeline-snap-icon timeline-compact timeline-vertical pl-0">
  {% for event in timeline %}
  <li class="p-0 m-0">
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end pl-4">
      <time class="text-lg font-mono">{{ event.year }}</time>
      <div class="text-xl font-black">{{ event.title }}</div>
      <p class="italic">
        {{- event.description -}}
      </p>
    </div>
    <hr />
  </li>
  {% endfor %}
</ul>

Ut eleifend lacus at erat efficitur bibendum. Ut laoreet elit nec dolor molestie finibus. Vivamus justo risus, scelerisque nec dolor ut, pretium fringilla purus. Nam nisl erat, tristique ac libero vitae, bibendum pellentesque nulla. Praesent accumsan ut mauris ut euismod. Etiam mattis a justo eget blandit. Aliquam vitae magna eget nisi suscipit finibus id sit amet nulla.

Ut eleifend lacus at erat efficitur bibendum. Ut laoreet elit nec dolor molestie finibus. Vivamus justo risus, scelerisque nec dolor ut, pretium fringilla purus. Nam nisl erat, tristique ac libero vitae, bibendum pellentesque nulla. Praesent accumsan ut mauris ut euismod. Etiam mattis a justo eget blandit. Aliquam vitae magna eget nisi suscipit finibus id sit amet nulla.

## Another Heading Example

Nam velit leo, mattis ac dui non, vulputate porttitor sapien. Praesent in aliquet dui. Nulla facilisi. Maecenas nulla ex, facilisis non aliquet ac, ultrices eu sem. Sed vel aliquet urna. Mauris quis ex at lectus iaculis elementum id id massa. Integer luctus nulla vel tellus rutrum, ac pulvinar erat finibus. Aliquam erat volutpat. Pellentesque vel velit sit amet mauris dignissim feugiat.


