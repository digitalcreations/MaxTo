---
title: Test page
---

# Test header

The point of this page is to show all of the different styles that are allowed to be used in the documentation. {.lead}

That means that a lot of the text on this page is longer than it needs to be, and some of it is just meaningless. The preceding paragraph should be a bit bigger than this one. 

## Test sub-header

Normal sized paragraph text. Note that this isn't purely Github Flavored Markdown, we use the [Markdig](https://github.com/lunet-io/markdig) parser with these extensions:

- SmartyPants --- allows you to turn three dashes into an em-dash.
- Special attributes --- allows you to add CSS classes to anything
- Footnotes --- because footnotes[^1] are fun
- Custom containers --- because we sometimes need to hide stuff in boxes.
- Bootstrap --- because our CSS is Bootstrap-based, this adds some nice classes for us.
- Figures --- allows you to provide captions to anything that needs it.
- Definition lists --- because sometimes you need those.

All of our pages have YAML frontmatter to define the title (used in the table of contents).

If you have some code you would like to show, this is how you do it:

```cs
items
    .Where(i => i.Id % 3 == 0)
    .SelectMany(i => i.Children)
    .GroupBy(i => i.Category)
    .Take(100);
```

### Third-level header

There are very specific reasons to do something like this. You can do quotes:

:::aside
This is an aside. You should keep it short and to the point, e.g. to link to [something externally](https://www.digitalcreations.no).
:::

> Coffee. The finest organic suspension ever devised... I beat the Borg with it. - **Captain Janeway**

It would usually be a good idea to have text both before and after one of these block quotes.

:::note

### Why didn't you just go with HTML?

I really like Markdown, but we had some requirements that really sends us into territory which could have been equally well-served with HTML. 

The Markdown extensions really makes Markdown seem more messy. Github Flavored Markdown itself is easy to read, these extensions are not as good.

This note is a good example of a fenced block; it applies the `.note` class to a `<div>` it creates.

:::

## Another level 2 header

Try to space out your headers so the flow of the document is easy to read.

When you call out stuff in the user interface, e.g. ""you should click *Options*, then *Regions*"", you should use italic emphasis. **Bold text** is reserved for text that is important.

:::important

Important blocks are easy to spot, but should be used sparingly, e.g. when talking about things that could result in destructive behavior.

They are styled as a box in the same way as notes, but in a different color. You can choose to have a header inside, but the header should be a level 3 header.

:::

## One more

This page is getting a bit long, but I don't care.

[Primary button](https://maxto.net){.btn .btn-primary .btn-lg}
[Default button](https://maxto.net){.btn .btn-default .btn-lg}

^^^
![Random image](https://placem.at/things?w=640&h=480)
^^^ Images should have captions like this.

[^1]: This one isn't.