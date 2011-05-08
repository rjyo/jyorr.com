#!/bin/bash

CMD="scp `dirname $0`/screen.css jyo@xuxiaoyu.com:~/jyorr/public/css"
echo $CMD
`$CMD`

CMD="scp `dirname $0`/jyorr.js jyo@xuxiaoyu.com:~/jyorr/public/js"
echo $CMD
`$CMD`
