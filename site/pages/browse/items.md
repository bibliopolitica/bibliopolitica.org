---
title: "Archival Materials"
description: "TBD"
layout: "page"
permalink: "/browse/items.html"
---

<div class="md:flex pb-10 not-prose">
  <aside class="flex-none top-0 min-w-56">
    <!-- mobile dropdown menu -->
    <ul class="md:hidden menu menu-horizontal rounded-box border border-neutral w-full mb-5">
      <li>
      <details closed>
        <summary class="font-bold">Personal Name</summary>
        <ul>
          <li><a href="">Castillo-Speed, Lillian</a></li>
          <li><a href="">Chabrán, Richard</a></li>
          <li><a href="">García-Ayvens, Francisco</a></li>
          <li><a href="">Arce, José Antonio, 1948-2018</a></li>
          <li><a href="">Soto, Carolyn</a></li>
          <li><a href="">Montoya, Malaquías</a></li>
          <li><a href="">Yañez, Elva</a></li>
          <li><a href="">Corpi, Lucha</a></li>
          <li><a href="">Muñoz, Carlos Jr.</a></li>
        </ul>
      </details>
      </li>	
      <li>
      <details closed>
        <summary class="font-bold">Topic</summary>
        <ul>
          <li><a href="">Manuscripts</a></li>
          <li><a href="">Portraits</a></li>
          <li><a href="">Maps</a></li>
          <li><a href="">Panels</a></li>
          <li><a href="">Show more</a></li>
        </ul>
      </details>
      </li>
      <li>
      <details closed>
        <summary class="font-bold">Type</summary>
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
        <div class="font-bold text-2xl tracking-tight mb-1">Personal Name</div>
        <ul>
          <li class="border-t border-neutral py-1"><a href="">Castillo-Speed, Lillian</a></li>
          <li class="border-t border-neutral py-1"><a class="font-bold text-accent" href="">Chabrán, Richard</a></li>
          <li class="border-t border-neutral py-1"><a href="">García-Ayvens, Francisco</a></li>
          <li class="border-t border-neutral py-1"><a href="">Arce, José Antonio, 1948-2018</a></li>
          <li class="border-t border-neutral py-1"><a href="">Soto, Carolyn</a></li>
          <li class="border-t border-neutral py-1"><a href="">Montoya, Malaquías</a></li>
          <li class="border-t border-neutral py-1"><a href="">Yañez, Elva</a></li>
          <li class="border-t border-neutral py-1"><a href="">Corpi, Lucha</a></li>
          <li class="border-t border-neutral py-1"><a href="">Muñoz, Carlos Jr.</a></li>
        </ul>
      </li>
      <li class="pb-5"> 
        <div class="font-bold border-neutral text-2xl tracking-tight mb-1">Topic</div>
        <ul>
          <li class="border-t border-neutral py-1"><a href="">Manuscripts</a></li>
          <li class="border-t border-neutral py-1"><a class="font-bold text-accent" href="">Portraits</a></li>
          <li class="border-t border-neutral py-1"><a href="">Maps</a></li>
          <li class="border-t border-neutral py-1"><a href="">Panels</a></li>
          <li class="border-t border-neutral py-1"><a class="italic" href="">Show more</a></li>
        </ul>
      </li>
      <li class="pb-5"> 
        <div class="font-bold border-neutral text-2xl tracking-tight mb-1">Type</div>
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
          <a href="{{ '/item/' | append: item.id | url }}.html">
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
