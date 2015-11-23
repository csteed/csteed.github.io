for i in `seq 1 28`
do
  origfname="d$i.jpg"
  thumbfname="d$i-thumb.jpg"
  convert $origfname -resize 250 $thumbfname
done
