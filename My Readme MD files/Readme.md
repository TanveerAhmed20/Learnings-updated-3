## Regular Expressions

`Regular Expresions or regex is a sequence of characters that define a search pattern`


#### Regex Basics 

* foobar &#x2611;
* fooxbar&#x2611;
* baryfoo
* foobar &#x2611;
*  fooxybar&#x2611;
*  foocbar &#x2611;

Here 1,2,4,5,6 have the requried patten foo*bar


### Example 2: 
* fooadcbar&#x2611;
* fooxxybar&#x2611;
* baryfoo 
* foobar &#x2611;
*  fooxybar&#x2611;
*  foocbar &#x2611;

Here 1,2,4,5,6 have the requried patten foo.*bar

### Regular Expressions - POSIX

## The Basic Set of Regular Expressions 
|   Symbol   |   What does it represent | 
|-----  |:---|
|    * |  Zero or more occurrences of the character that precedes this asterisk  |  
|   .  |   A wildcard that represents any character |  
|   \s |  Represents whitespace |  
|[pqr] | A single characte which can be either a  'p' , 'q' or 'r' |
| [a-d]| A single character that falls in the range 'a-d' , i.e one of 'a' , 'b' , 'c' or 'd' |
|[^pq] | A single character that is neither p nor q|
| ^pattern| represnet the beginning of the line|
|pattern$|represents the end of the line|
|\s*|represents zero or more white spaces|



## Character Classes with Ranges : 

### `Example 3`: 

* joo &#x2611;
* boo &#x2612;
* koo  &#x2611;
* loo  &#x2611;
* woo &#x2612;
* moo &#x2611;
* zoo &#x2611;
* coo &#x2612;

pattern  [jklmz|oo]
solution: `[j-mJ-Mz]oo`

## Escaping with backspace

### `Example 4`: 

* xxx.yy &#x2611;
* xx.yyyy &#x2611;
* x.yy  &#x2611;
* xy &#x2612;
* xxyy &#x2612;
* yyxx &#x2612;
* yxxx &#x2612;


**NOTE**: following characters should be escaped with a backslash as these characters have special meaning otherwise: `^$*.[()\`

ESCAPE with backslash character

Solution : `x*\.y*`


### `Example 14`: 

* x#y &#x2611;
* x\y &#x2611;
* x^y &#x2611;
* x&y &#x2612;
* x%y &#x2612;

solution: `x[#\\\^]y`


## Anchors

* foo bar baz&#x2611;
* bar foo baz&#x2612;
* baz foo bar&#x2612;
* bar baz foo&#x2612;
* foo baz bar&#x2611;
* baz bar foo &#x2612;


**NOTE** :  ^ is a placeholder that signifies beginning of a line . The Interpretation of ^ differs wihtin square and outside of it . 
Indside square brackets ^ stands for negation .Outside it is a placeholder for beginning of line
Solution ; `^foo .*`

Starting with foo and succeed any letters



### Example 16 
* foo bar baz&#x2612;
* bar foo baz&#x2612;
* baz foo bar&#x2611;
* bar baz foo&#x2612;
* foo baz bar&#x2611;
* baz bar foo &#x2612;

**NOTE** :  `$ is a placeholder that signifies end of line`

Solution `.* bar$`


* foo &#x2611;
* bar foo baz&#x2612;
* baz foo bar&#x2612;
* bar baz foo&#x2612;
* foo baz bar&#x26112;
* baz bar foo &#x2612;

solution `^foo$`

## The Extended Set of Regular Expressions 

|   Symbol   |   What does it represent | 
|-----  |:---|
|    +|  One or more occurence of the character that precedes this symbol |  
|   ?  |  Zero or one occurence of the character that precedes this question mark |  
|  pat1\|pat2| matches either the pattern pat1 or the pattern pat2 |  
|()| Divides patterns into groups  |
|{m}|Exactly 'm' occurences of whatever precedes |
|{m,n} |Exactly 'm' occurences of whatever precedes|
|{m,} |minimum 'm' occurences of whatever precedes|
|{,n} |represents at most 'n' repetitions of whatever immediately precedes this|



### Example 18

a{m} : represents exactly m repetitionof of whatever immediately precedes this 

`^[0-9]{3}$`  : gives 3 digit number 

### Example 19

* CREATING A RANGE OF REPITITIONS 
`^[a-z]{4,6}$` : gives patterns with atleast 4 letters or atmost 6 letters

### EXAMPLE 20

HA
HAHAHAHA
HAHAHA
HAHA

HAHAHAHAHAHA


SOLUTION : `^(haha){2}(ha){0,5}$`

**NOTE** : parentheses () can be used to group and treat as sigle entity

In the above solution haha and ha is treated as single entity


#The importance of ^ and $ symbols together : 

`^(ha){,2}$` : if no ^ and $ symbol is present then it will match patterns like 
`[a-zA-Z]*ha[a-zA-Z]*` and `[a-zA-Z]*haha[a-zA-Z]*` and `[a-zA-Z]*[a-zA-Z]*`


## The PLUS Repeater +

* fooaaaabar&#x2611;
* fooabar&#x2611;
* foobar
* fooabar&#x2611;
* fooxxxbar
* fooxbar

common pattern : foo| aaaa,a,aa|bar

`a+ - one or more occurence of 'a' (The character just preceding the plus symbol)`

solution : `fooa+bar` 

## Question Mark Binary ?

REGEX EX-23

* https://website &#x2611;
* http://website &#x2611;
* httpss://website
* httpx://website
* httpxx://website



### Validation of host url 

solution by me :`'^https?://[a-zA-z0-9]*\.((com)|(net)|(co.in))$'`

## MAKING CHOICES WITH PIPE

REGEX EXAMPLE :24 
* sapwood 
* rosewood
* logwood &#x2611;
* teakwood
* plywood &#x2611;
* redwood

pattern : log,ply |wood 

Solution : `(log|ply)wood`

## REGEX- GROUP CAPTURE, FIND AND REPLACE 

REGEX EXAMPLE 25: 
#### **( The monitor Resolution Problem)**

* 1280x720 -> 1280 pix by 720 pix
* 1920x1080 -> 1920 pix by 1080 pix

Solution :

**`Step--1`** : generation of capture groups

First we capture the groups LHS of x is Group-I and RHS is Group-II

`([0-9]+)x([0-9]+)` : Group-I x Group-II

**`Step--2 :`** Generation of substitution pattern

`$1 pix by $2 pix` is the format for the replace group , here `\1` is the first capture group position and `\2` is the second capture group position

To use this Find and Replace method in JAVASCRIPT use 

```javascript
const str = '1280x720';
const strnew = str.replace(/([0-9]+)x([0-9]+)/, "$1 pix by $2 pix") // 1280 pix by 720 pix

```
REGEX EXAMPLE 26: 

#### **( The FirstName LastName Problem)**

* John Wallace -> Wallace, John 

```javascript
const str = 'John Wallace';
const strnew = str.replace(/([a-zA-Z]+)\s([a-zA-Z]+)/, "$2,$1") 

```

REGEX EXAMPLE 28: 

#### **(The Phone number Problem)**

* 914.581.3013 -> xxx.xxx.3013

```javascript
const str = '914.581.3013';
const strnew = str.replace(/([0-9]{3})\.([0-9]{3})\.([0-9]{4})/, "xxx.xxx.$3") 

```

REGEX EXAMPLE 29: 

#### **(Date Problem)** Explains about Capture group numbering for nested Capture groups

* Jan 5th 1987 => 5-Jan-87
* Dec 26th 2010 => 26-Dec-10
* Mar 2nd 1923 -> 2-Mar-23
* Oct 1st 2008 -> 1-Oct-08
* Aug 3rd 2009 -> 3-Aug-09
* Jun 10th 2001 -> 10-Jun-01

```javascript
const str3 = 'Jan 31st 1987';
const part1 = new RegExp('[A-Za-z]{3}');
const part2 = new RegExp('(([1-2]?[0-9])|(3[0-1]))((st)|(nd)|(rd)|(th))');
const part3 = new RegExp('[0-9]{2}([0-9]{2})');
const final = new RegExp('([A-Za-z]{3})\s(([1-2]?[0-9])|(3[0-1]))((st)|(nd)|(rd)|(th))\s[0-9]{2}([0-9]{2})');
console.log(str3.match(part1));
console.log(str3.match(part2));
console.log(str3.match(part3));
console.log(str3.match(final));
const strnew3 = str3.replace(/([A-Za-z]{3})\s(([1-2]?[0-9])|(3[0-1]))((st)|(nd)|(rd)|(th))\s[0-9]{2}([0-9]{2})/, "$1 $2 $10") 
console.log(strnew3);
```

![alt text](https://lh3.googleusercontent.com/T9uRKZAdhMMj50MM_14PCVuQ4r7mJFcAbdEcDvrPb_-y-uZQxqRNRCDyNTTmxf_biBx7iDWBXYTEYO7WPYXBGk13J8aMqyzIAsqqfT-q9DuSXeouhw5n1IGLcvDceYpsSHQrq6xeQ6lwyfVDNKVUE1I2zeNAIxCmhZILKJXMVx6HWR9enmcvZ9DfYz68HluwWijEiCYknmFRog7Tz2n8jDE0lbeaG-wULF8uC07mKot4wBZauh_l5QRo60aH4SrW23hOdAp9SXsC02uisPIWwwefbrfefNMWhrzvEm0mmsJRqq5SR7NWq-VxW8WpJgUSxc3VvTpJaYUIaCs5Te4Eb2QfkWqDClY0T4kkzbBt9MpjDdQU2pMAEHYXcBIq82tDlWPqWvi_7lrSLtkDk2agrvkHemBgzJLPmK2YiUzPF2HPEmzo0aOm5U42rg7IKem6K4ek0YXoUXO6s66AaA_a8xoE1QWEKO4avmV-mH5S8L3RgymWRkPq-w4JhZwBSca3Ial_e9sq164euDuTzZg2Mw16HSvPR69RTuZKJAUmYjD_1EIzhgCiIO_Aw4IGdYHqR2tbI9hxI36hcS6kV90rMD93H2e7W8LJcloBIGW97VZ_OvDbjs_1lku-i_JaqDgo6DDsCNM4GcV-5naTpsiioKghtsRFwPxaJDG12LT0cx-L2Qs4e8tseMfaGMMXCs57zFYAGN1GNezAyZDIOUaLGZe5H7LPi2_Xbv-Mo21YAbj9vDprtGKM0HJx6KY=w1279-h280-no?authuser=0)


## `VALIDATE EMAIL`

* bob.123@gmail.com
* alice-personal@yahoo.co.in
* admin@cloud.guru
* tom_business@amazon.ca
* george@yahoo.com `invalid`
* steve austin@gmail.com `invalid`


### Solution : 


