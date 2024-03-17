---
title: "Archival Items"
description: "TBD"
layout: "base"
permalink: "/browse/items/index.html"
---

<h1 class="p-5 pb-3 md:pt-5 md:pb-9 text-3xl md:text-5xl md:tracking-tight font-bold">Browse Archival Items</h1>

<div class="md:flex px-5 pb-10">
  <aside class="flex-none top-0 min-w-56">
    <!-- mobile dropdown menu -->
    <ul class="md:hidden menu menu-horizontal rounded-box border border-neutral w-full mb-5">
      <li>
      <details closed>
        <summary class="font-bold">Location</summary>
        <ul>
          <li><a href="">Turkey</a></li>
          <li><a href="">Iran</a></li>
          <li><a href="">Middle East and North Africa</a></li>
          <li><a href="">Egypt</a></li>
          <li><a href="">Show more</a></li>
        </ul>
      </details>
      </li>
      <li>
      <details closed>
        <summary class="font-bold">Object Type</summary>
        <ul>
          <li><a href="">Manuscripts</a></li>
          <li><a href="">Portraits</a></li>
          <li><a href="">Maps</a></li>
          <li><a href="">Panels</a></li>
          <li><a href="">Show more</a></li>
        </ul>
      </details>
      </li>
    </ul>
    <!-- desktop menu -->
    <ul class="hidden md:block md:text-sm sticky top-20 max-h-screen overflow-y-scroll">
      <li class="pb-5">
        <div class="font-bold text-2xl tracking-tight mb-1">Location</div>
        <ul>
          <li class="border-t border-neutral py-1"><a href="">Turkey</a></li>
          <li class="border-t border-neutral py-1"><a href="">Iran</a></li>
          <li class="border-t border-neutral py-1"><a href="">Middle East and North Africa</a></li>
          <li class="border-t border-neutral py-1"><a href="">Egypt</a></li>
          <li class="border-t border-neutral py-1"><a class="italic" href="">Show more</a></li>
        </ul>
      </li>
      <li class="pb-5"> 
        <div class="font-bold border-neutral text-2xl tracking-tight mb-1">Object Type</div>
        <ul>
          <li class="border-t border-neutral py-1"><a href="">Manuscripts</a></li>
          <li class="border-t border-neutral py-1"><a class="font-bold text-accent" href="">Portraits</a></li>
          <li class="border-t border-neutral py-1"><a href="">Maps</a></li>
          <li class="border-t border-neutral py-1"><a href="">Panels</a></li>
          <li class="border-t border-neutral py-1"><a class="italic" href="">Show more</a></li>
        </ul>
      </li>
    </ul>
  </aside>
  <main class="flex-auto md:px-10">
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 gap-y-5 items-center">
      {%- for item in items -%}
        {% capture img_url %}https://d1b7k5w7yjwpfg.cloudfront.net/iiif/2/bibliopolitica_{{ item.id }}_{{ item.id }}_001/full/800,/0/default.jpg{% endcapture %}
        <div class="mb-8">
          <a href="{{ '/item/' | append: item.id | url }}">
            <img 
              src="{{ img_url }}"
              alt=""
              class="max-w-full h-auto"
            >
            <div class="mt-1 leading-[1.4]">
              {{ item.label }}
            </div>
          </a>
        </div>
      {%- endfor -%}
    </div>
  </main>
</div>
