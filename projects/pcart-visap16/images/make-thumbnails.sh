for i in `seq 1 10`
do
  origfname="PCPArt$i.pdf"
  thumbfname="PCPArt$i-thumb.png"
  convert $origfname -resize 350 $thumbfname
done
