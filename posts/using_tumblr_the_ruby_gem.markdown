---
layout: post
title: Jyo's Note
---

![the editor](http://img.skitch.com/20110415-xc3w2g69y7sfnyxhgrkr2y7peu.png)

Sometime I want to use tumblr just as a normal blog, for example, to write a long post like [my previous tip about Kai-Fu Lee](http://jyorr.com/post/4622300101/former-google-vp-kai-fu-lee-got-a-nickname-start-copy). As rich text editors on web pages always give me surprises, I tried something else.

##A Solution##
Using [markdown to write](http://daringfireball.net/projects/markdown/syntax) makes me feel pretty comfortable. And with [this tool](https://github.com/mwunsch/tumblr) written in Ruby, you can publish whatever you wrote in markdown directly to your Tumblr with just one command:

    $ tumblr path/to/a_post.markdown
    Email Address: tumblr-user@foobarmail.com
    Password:   
    Published to Tumblr. The ID for this post is: 123456789
    
Easy! But it's far from perfect...

##Drawbacks##
1. Need to input your email/password every time. You can keep them in a config file but that makes me feel unsecured.
2. It's a one-shot deal. If you got something wrong in your post, you have to edit it in Tumblr's editor or create a new post. Using TextMate's preview function before posting will save you a lot of time.
3. The [&ndash;&ndash;&ndash; style for h2](http://daringfireball.net/projects/markdown/syntax#header) doesn't work as &ndash;&ndash;&ndash; is used for meta info section.