---
title: "The BiblioPolítica Project"
description: "TBD"
layout: page
team:
  - name: Amanda Belantara
  - name: Lillian Castillo-Speed
  - name: Richard Chabrán
  - name: Emily Drabinski
  - name: Matthew Haugen
  - name: Inaiah Lujan
  - name: Ed Madrid
  - name: Marii Nyrop
permalink: "/about/project.html"
---

Ut eleifend lacus at erat efficitur bibendum. Ut laoreet elit nec dolor molestie finibus. Vivamus justo risus, scelerisque nec dolor ut, pretium fringilla purus. Nam nisl erat, tristique ac libero vitae, bibendum pellentesque nulla. Praesent accumsan ut mauris ut euismod. Etiam mattis a justo eget blandit. Aliquam vitae magna eget nisi suscipit finibus id sit amet nulla.

## Credits 

<div class="not-prose">
  <div class="grid md:grid-cols-2 grid-cols-1">
  {% for person in team %}
  <div class="flex gap-4 items-center my-6">
    <div class="flex-none">
      <div class="avatar">
        <div class="w-24 h-24 rounded-full">
          <img src="{{ person.image | default: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' | url }}" />
        </div>
      </div>
    </div>
    <div class="flex-1">
      <p class="font-semibold text-xl">{{ person.name }}</p>
      <p>{{ person.blurb | default: "TODO: Add a tiny blurb" }}</p>
    </div>
  </div>
  {% endfor %}
  </div>
</div>

## Gratitude

NYU DH seed grant, UCB, people, etc.


