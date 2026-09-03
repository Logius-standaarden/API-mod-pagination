# Introduction

This document is a module as part of the [[[ADR]]].

Resource collections can be unreasonably large for a single response.
With pagination, a segment of the resources can be returned while providing a method to retrieve other segments (or "pages").
This module provides design rules which attempt to strike a balance between enhanced predictability for clients and flexility to suit different data collection types.

A distinction between two categories of collections is used throughout this module: static and dynamic.

## Static collections

Static collections are stable or at least unlikely to change while a client is retrieving segments of the resources.
Page-number pagination would suffice for these collections.
If no mutation occurred between retrieving pages, sequential pages will have no gaps or overlap, e.g. if item _n_ is the last of a page, item _n+1_ will be the first item on the next page.

If a resource collection is not completely static, no pagination method is reliable for synchronisation.

## Dynamic collections

Dynamic collections see frequent mutations.
While a client jumps from one page to the next an item may have been inserted or removed in the previous pages causing a shift that results in an overlap or a gap, respectively.
At the cost of complexity, cursor pagination is more robust by providing a pointer to a listed item for page boundaries which remain consistent even if collection shifts.

## Pagination formats

In order to support both collection categories, this module allows two pagination formats: page-number pagination (using `page` and `pageSize`) and cursor pagination (using `cursor` and `limit`).
