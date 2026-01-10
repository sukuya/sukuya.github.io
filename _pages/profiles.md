---
layout: page
permalink: /reflections/
title: reflections
description: Photography, culinary adventures, visual quotes, and poetry
nav: true
nav_order: 7
horizontal: false
---

<!-- pages/reflections.md -->
<div class="reflections">
{% assign sorted_photos = site.reflections | sort: "importance" %}

<!-- Generate cards for each photo category -->
{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for photo in sorted_photos %}
      {% include reflections.liquid %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3 g-4">
    {% for photo in sorted_photos %}
      {% include reflections.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>
