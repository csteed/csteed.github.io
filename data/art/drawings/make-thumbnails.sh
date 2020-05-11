for i in `seq 1 28`
do
  convert "d$(printf "%03d" ${i}).jpg" -resize 120 "d$(printf "%03d" ${i})-thumb.jpg"
  # num = $(printf "%03d" ${i})
  # echo "d$(printf "%03d" ${i}).jpg"
  # fname = "d$(printf "%03d" ${i})..jpg"
  # echo $fname
  # origfname="d$i.jpg"
  # echo $origfname
  # thumbfname="d$i-thumb.jpg"
  # convert $origfname -resize 250 $thumbfname
done
