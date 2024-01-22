---
title: "Archival Items"
description: "TBD"
layout: "base"
permalink: "/browse/items/index.html"
---

<div class="flex mx-4 p-4 border border-solid border-gray-300">
  <aside class="flex-none top-0">
    <ul class="menu bg-base-200 rounded-box">
      <li>
        <a class="font-bold text-base">Location</a>
        <ul>
          <li><a href="">Turkey</a></li>
          <li><a class="active" href="">Iran</a></li>
          <li><a href="">middle-east-and-north-africa</a></li>
          <li><a href="">Egypt</a></li>
          <li><a href="">Show more</a></li>
        </ul>
      </li>
      <li>
        <a class="font-bold text-base">Object Type</a>
        <ul>
          <li><a href="">Manuscripts</a></li>
          <li><a href="">Portraits</a></li>
          <li><a href="">Maps</a></li>
          <li><a href="">Panels</a></li>
          <li><a href="">Show more</a></li>
        </ul>
      </li>
    </ul>
  </aside>
  <main class="flex-auto p-4 px-10">
    <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
      {%- for item in items -%}
        <div>
          <a href="/item/{{ item.id }}/">
            <img 
              src="{{ item.full_url }}"
              alt=""
            >
            <div class="m-1 lg:text-lg text-md font-semibold link">
              {{ item.label }}
            </div>
          </a>
        </div>
      {%- endfor -%}
    </div>
  </main>
</div>
