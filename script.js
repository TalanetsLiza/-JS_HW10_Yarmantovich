"use strict";

const DOM = function() {

    this.create = function(tagName) {
        const tag = document.createElement(tagName);
        return tag;
    }

    this.attr = function(element, name, value) {
        if (value !== undefined) {
            element.setAttribute(name, value);
            return value;
        } else {
            return element.getAttribute(name);
        }
    };

    this.html = function(element, value) {
        if (value !== undefined) {
            element.innerHTML = value;
            return value;
        } else {
            return element.innerHTML;
        }
    }
    
    this.search = function(element, selector) {
        return element.querySelectorAll(selector);
    }

    this.addClass = function(element, className) {
        element.classList.add(className);
    };

    this.removeClass = function(element, className) {
        element.classList.remove(className);
    };

    this.toggleClass = function(element, className) {
        element.classList.toggle(className);
    };

    this.hasClass = function(element, className) {
        return element.classList.contains(className);
    };

    this.append = function(element, newElement, beforeElement) {
        if (beforeElement) {
            beforeElement.before(newElement);
        } else {
            element.append(newElement);
        }
    }

    this.on = function(element, eventName, func) {
        element.addEventListener(eventName, func);
    }
}

const dom = new DOM();

const div = dom.create("div");

dom.attr(div, "id", "hello!");
console.log(dom.attr(div, "id"));

dom.html(div, "some html text");
console.log(dom.html(div));

console.log(dom.search(div));

dom.addClass(div, "container");

dom.removeClass(div, "container");

dom.toggleClass(div, "newContainer");

console.log(dom.hasClass(div, "newContainer"));

document.body.append(div);

dom.on(div, "click", onClick);

function onClick(event) {
    console.log(this);
    console.log(event);
}