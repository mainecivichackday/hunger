hunger
======

_[A Maine Civic Hack Day 2014](http://www.civichack.me/2014/) project._

This project is aimed at increasing awareness of the prevalance of food security issues in Maine. Datasets hidden in HTML tables and other hard-to-access formats were collected and cleaned to help lower the difficulty of future projects related to food security issues here in Maine.

The challenge was to create a visual representation of data that highlights the correlations between childhood hunger and educational attainment. While school performance data was limited over the past ten years, we were able to show a clear relationship between areas of Maine where families are struggling to put food on the table (as evidenced by enrollment in Food Assistance Programs) and average school grades by county.  Counties where families are food insecure have consistently lower educational performance. 

Interestingly, when we plot food insecurity over time, we see that it is rising, even as the unemployment rate is dropping. What we can learn from this is that even though more Mainers are working, they are still not earning enough to be secure. In Maine, rural households face hunger at a higher rate than urban families.

Additionally, we gathered location and contact information for food pantries and soup kitchens across the state. The large majority of these resources are concentrated in more densely populated areas, but hunger remains a problem in the areas where food pantries are sparse. 




![](http://img.shields.io/badge/version-alpha-red.svg?style=flat)

[![](https://pbs.twimg.com/media/Bo99swkIMAAqNX-.jpg:large)](https://twitter.com/RandalHunt/status/472734693943947265/photo/1)

_That's Ben Sprague giving his pitch for the project!_

## Datasets

#### [addresses.csv](https://github.com/mainecivichackday/hunger/blob/gh-pages/data/addresses.csv) / [addresses.geojson](https://github.com/mainecivichackday/hunger/blob/gh-pages/data/addresses.geojson)

Geocoded (via [geocod.io](https://dash.geocod.io/)) addresses for the `percent-free-and-reduced-lunch-reports` information.

#### [dropout.csv](https://github.com/mainecivichackday/hunger/blob/gh-pages/data.csv)

Dropout percentages for High Schools in Maine. Data acquired from the [Maine Department of Education Data Warehouse](http://dw.education.maine.gov/DirectoryManager/Web/maine_report/MaineLanding.aspx).

#### [food-assistance-enrollment-program.csv](https://github.com/mainecivichackday/hunger/blob/gh-pages/data/food-assistance-program-enrollment.csv)

The percentages of students enrolled in Food Assistance Enrollment for High Schools in Maine. Data acquired from the [Maine Department of Education Data Warehouse](http://dw.education.maine.gov/DirectoryManager/Web/maine_report/MaineLanding.aspx).

#### [maine-educational-assessment.csv](https://github.com/mainecivichackday/hunger/blob/gh-pages/data/maine-educational-assessment.csv)
#### [pantries.csv](https://github.com/mainecivichackday/hunger/blob/gh-pages/data/pantries.csv) / [pantries.geojson](https://github.com/mainecivichackday/hunger/blob/gh-pages/data/pantries.geojson)

## Contributors
- Sarah Newcomb
- Randy Hunt - [@randalhunt](https://twitter.com/randalhunt)
- Ben Sprague - [@bensprague](https://twitter.com/bensprague)
- Chris Bond - [@chrisjamesbond](http://github.com/chrisjamesbond)
- Justin Bond - [@kzinti](http://github.com/kzinti)
- Jacques Tardie - [@jqtrde](http://twitter.com/jqtrde)
- Alex Gross - [@alexjgross](http://github.com/alexjgross)

## Additional Resources
- [Unemployment Rate by County](http://datacenter.kidscount.org/data/tables/1569-unemployment?loc=21&loct=2#detailed/5/3284-3299/false/868,867,133,38,35/any/3345)
- [Median Household Income by County](http://datacenter.kidscount.org/data/tables/1568-median-household-income?loc=21&loct=2#detailed/5/3284-3299/false/868,867,133,38,35/any/3343)
- [School Children Eligible for Subsidized Lunch](http://datacenter.kidscount.org/data/tables/1566-school-children-eligible-for-subsidized-school-lunch?loc=21&loct=2#detailed/5/3284-3299/false/869,36,868,867,133/any/12834,3339)
