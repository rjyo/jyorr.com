#!/bin/bash

# CMD="scp `dirname $0`/screen.css jyo@xuxiaoyu.com:~/jyorr/public/css"
# echo $CMD
# `$CMD`

# CMD="scp `dirname $0`/jyorr.js jyo@xuxiaoyu.com:~/jyorr/public/js"
# echo $CMD
# `$CMD`

CMD="rsync --chmod=a+r --exclude='.DS_Store' -r `dirname $0`/public/ jyo@xuxiaoyu.com:~/jyorr/public/"
echo $CMD
`$CMD`

