# proxy-migration


## What we will cover

* What is a legacy systems?
* What makes them hard to maintain?
* How can we migrate a legacy system?

## Notes

Legacy is a word programmers use to describe code that is messy or not in line
with what is currently considered good practice.

This word is sometimes overused and sometimes it just means "code I did not write".

However sometimes a codebase has grown so messy that it is actually hard to maintain
or even worse, it may be so bad that it is slowing down not just the development process
but the user experience.

Other things can factor in as well, perhaps you started with a small application and now
the system has grown too big for your current needs and you need to switch languages.

When this happens we usually have three options:

1. We can refactor the system
2. We can rewrite the system
3. We can migrate the system

If you have the option of refactoring this will on average be the simplest thing but
it is not always possible or the end result will simply be code that rots a few months
later.

Rewriting works well if the system is small but it rarely works for big projects, this
is by far the biggest beginner mistake where you notice a few ugly things you have an
idea of how to fix and then you start a rewrite but in the end you forgot about a bunch
of other problems which ultimately leave you with a system that is just as ugly or
you simply have to give up on the rewrite.

Migrating is the one I have found to be the most viable solution and it can be done
in a few ways, the most common one is to slice out features in their own services
as the most common reason for legacy is tied in to how big the codebase is.

A good rule of thumb is that size rots code, the less code you have to work with
the easier it is to maintain.

Having multiple services is however not for free, it takes a lot more maintenance
to manage multiple services than it takes to manage one monolith but if you have 
a project that has grown to the size where this makes sense the trade is usualy 
worth it.
