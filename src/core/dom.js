class Dom {
  constructor(selector) {
    this.$el =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }

  html(html) {
    if (typeof html === "string") {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  on(evenType, callback) {
    this.$el.addEventListener(evenType, callback);
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    this.$el.append(node);
    return this;
  }
}

export function $(selector) {
  return new Dom(selector);
}
$.create = (tagname, classes = "") => {
  const el = document.createElement(tagname);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
