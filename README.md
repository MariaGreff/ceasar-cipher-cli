# CLI tool that encodes and decodes a text by Caesar cipher.

CLI tool accepts 4 options (short alias and full name):

-s, --shift: a shift - a number (required)
-i, --input: an input file
-o, --output: an output file
-a, --action: an action: encode/decode (required)

## Install:

\$ npm install

## Usage example:

$ node my_caesar_cli -a encode -s 7 -i "./plain.txt" -o "./output.txt"
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
\$ node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt

input.txt This is secret. Message about "\_" symbol!

output.txt Aopz pz zljyla. Tlzzhnl hivba "\_" zftivs!
