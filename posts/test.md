---
layout: post
title: Jyo's Note
---

##test

* Hello


hello -!

{% highlight ruby %}
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
{% endhighlight %}

{% highlight erlang %}
    %% sort: sort a list of comparable items.
    %%
    %% param: List of items to sort
    %%
    %% handle the empty list
    sort([]) ->
        [];
    %% at least one item in the list
    sort([Pivot|Rest]) ->
        %% divide: split the list into those less than the Pivot and 
        %%         those greater than (or equal to) the Pivot
        Lessthan = [Item || Item <- Rest, Item < Pivot],
        Morethan = [Item || Item <- Rest, Item >= Pivot],
        %% conquer: recursively call sort on the split parts, and join.
        sort(Lessthan) ++ [Pivot] ++ sort(Morethan).
{% endhighlight %}
