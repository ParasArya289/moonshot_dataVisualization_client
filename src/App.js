import "./App.css";
import React, { useEffect, useState } from "react";
import { BarChartComponent } from "./Components/BarChartComponent";
import { LineChartComponent } from "./Components/LineChartComponent";
import axios from "axios";
import { DateRangePicker } from "react-date-range";
import { filter } from "./Utility";
import { useSearchParams } from "react-router-dom";
const jsonData = [
  {
    "day": "2022-10-03T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 177,
    "b": 706,
    "c": 769,
    "d": 89,
    "e": 286,
    "f": 588
  },
  {
    "day": "2022-10-03T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 882,
    "b": 698,
    "c": 579,
    "d": 649,
    "e": 889,
    "f": 937
  },
  {
    "day": "2022-10-03T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 522,
    "b": 825,
    "c": 523,
    "d": 88,
    "e": 572,
    "f": 407
  },
  {
    "day": "2022-10-03T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 609,
    "b": 323,
    "c": 324,
    "d": 578,
    "e": 673,
    "f": 665
  },
  {
    "day": "2022-10-04T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 707,
    "b": 815,
    "c": 184,
    "d": 894,
    "e": 304,
    "f": 317
  },
  {
    "day": "2022-10-04T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 646,
    "b": 885,
    "c": 978,
    "d": 182,
    "e": 772,
    "f": 508
  },
  {
    "day": "2022-10-04T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 210,
    "b": 908,
    "c": 687,
    "d": 87,
    "e": 496,
    "f": 592
  },
  {
    "day": "2022-10-04T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 886,
    "b": 805,
    "c": 162,
    "d": 374,
    "e": 993,
    "f": 814
  },
  {
    "day": "2022-10-05T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 845,
    "b": 593,
    "c": 972,
    "d": 751,
    "e": 684,
    "f": 612
  },
  {
    "day": "2022-10-05T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 203,
    "b": 627,
    "c": 479,
    "d": 618,
    "e": 758,
    "f": 440
  },
  {
    "day": "2022-10-05T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 180,
    "b": 31,
    "c": 725,
    "d": 557,
    "e": 422,
    "f": 63
  },
  {
    "day": "2022-10-05T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 241,
    "b": 27,
    "c": 771,
    "d": 236,
    "e": 868,
    "f": 920
  },
  {
    "day": "2022-10-06T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 45,
    "b": 416,
    "c": 885,
    "d": 312,
    "e": 856,
    "f": 164
  },
  {
    "day": "2022-10-06T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 665,
    "b": 496,
    "c": 849,
    "d": 188,
    "e": 886,
    "f": 665
  },
  {
    "day": "2022-10-06T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 888,
    "b": 243,
    "c": 11,
    "d": 900,
    "e": 728,
    "f": 22
  },
  {
    "day": "2022-10-06T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 500,
    "b": 288,
    "c": 507,
    "d": 936,
    "e": 375,
    "f": 243
  },
  {
    "day": "2022-10-07T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 652,
    "b": 874,
    "c": 210,
    "d": 980,
    "e": 60,
    "f": 307
  },
  {
    "day": "2022-10-07T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 368,
    "b": 22,
    "c": 206,
    "d": 569,
    "e": 83,
    "f": 116
  },
  {
    "day": "2022-10-07T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 706,
    "b": 803,
    "c": 356,
    "d": 836,
    "e": 615,
    "f": 878
  },
  {
    "day": "2022-10-07T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 939,
    "b": 340,
    "c": 982,
    "d": 186,
    "e": 118,
    "f": 933
  },
  {
    "day": "2022-10-08T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 926,
    "b": 659,
    "c": 138,
    "d": 793,
    "e": 683,
    "f": 169
  },
  {
    "day": "2022-10-08T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 341,
    "b": 38,
    "c": 389,
    "d": 866,
    "e": 368,
    "f": 195
  },
  {
    "day": "2022-10-08T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 717,
    "b": 838,
    "c": 0,
    "d": 229,
    "e": 815,
    "f": 906
  },
  {
    "day": "2022-10-08T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 17,
    "b": 100,
    "c": 663,
    "d": 181,
    "e": 325,
    "f": 418
  },
  {
    "day": "2022-10-09T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 377,
    "b": 97,
    "c": 816,
    "d": 15,
    "e": 552,
    "f": 511
  },
  {
    "day": "2022-10-09T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 909,
    "b": 253,
    "c": 493,
    "d": 867,
    "e": 762,
    "f": 45
  },
  {
    "day": "2022-10-09T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 92,
    "b": 906,
    "c": 105,
    "d": 539,
    "e": 830,
    "f": 400
  },
  {
    "day": "2022-10-09T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 243,
    "b": 289,
    "c": 167,
    "d": 748,
    "e": 943,
    "f": 874
  },
  {
    "day": "2022-10-10T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 72,
    "b": 252,
    "c": 447,
    "d": 332,
    "e": 738,
    "f": 550
  },
  {
    "day": "2022-10-10T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 446,
    "b": 956,
    "c": 546,
    "d": 665,
    "e": 336,
    "f": 462
  },
  {
    "day": "2022-10-10T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 977,
    "b": 542,
    "c": 115,
    "d": 708,
    "e": 70,
    "f": 343
  },
  {
    "day": "2022-10-10T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 208,
    "b": 118,
    "c": 534,
    "d": 755,
    "e": 814,
    "f": 404
  },
  {
    "day": "2022-10-11T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 223,
    "b": 507,
    "c": 28,
    "d": 53,
    "e": 226,
    "f": 267
  },
  {
    "day": "2022-10-11T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 874,
    "b": 177,
    "c": 483,
    "d": 817,
    "e": 647,
    "f": 919
  },
  {
    "day": "2022-10-11T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 879,
    "b": 296,
    "c": 136,
    "d": 351,
    "e": 650,
    "f": 343
  },
  {
    "day": "2022-10-11T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 562,
    "b": 687,
    "c": 164,
    "d": 578,
    "e": 1000,
    "f": 399
  },
  {
    "day": "2022-10-12T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 224,
    "b": 693,
    "c": 825,
    "d": 618,
    "e": 25,
    "f": 108
  },
  {
    "day": "2022-10-12T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 589,
    "b": 563,
    "c": 339,
    "d": 732,
    "e": 170,
    "f": 380
  },
  {
    "day": "2022-10-12T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 494,
    "b": 979,
    "c": 971,
    "d": 981,
    "e": 703,
    "f": 43
  },
  {
    "day": "2022-10-12T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 462,
    "b": 299,
    "c": 468,
    "d": 606,
    "e": 296,
    "f": 328
  },
  {
    "day": "2022-10-13T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 509,
    "b": 342,
    "c": 498,
    "d": 743,
    "e": 649,
    "f": 780
  },
  {
    "day": "2022-10-13T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 213,
    "b": 654,
    "c": 853,
    "d": 96,
    "e": 273,
    "f": 271
  },
  {
    "day": "2022-10-13T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 567,
    "b": 873,
    "c": 799,
    "d": 585,
    "e": 97,
    "f": 458
  },
  {
    "day": "2022-10-13T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 814,
    "b": 558,
    "c": 677,
    "d": 29,
    "e": 87,
    "f": 75
  },
  {
    "day": "2022-10-14T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 20,
    "b": 394,
    "c": 876,
    "d": 990,
    "e": 641,
    "f": 795
  },
  {
    "day": "2022-10-14T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 671,
    "b": 289,
    "c": 467,
    "d": 734,
    "e": 661,
    "f": 222
  },
  {
    "day": "2022-10-14T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 879,
    "b": 391,
    "c": 571,
    "d": 330,
    "e": 77,
    "f": 719
  },
  {
    "day": "2022-10-14T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 432,
    "b": 661,
    "c": 743,
    "d": 381,
    "e": 676,
    "f": 839
  },
  {
    "day": "2022-10-15T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 863,
    "b": 742,
    "c": 698,
    "d": 186,
    "e": 791,
    "f": 783
  },
  {
    "day": "2022-10-15T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 861,
    "b": 363,
    "c": 78,
    "d": 464,
    "e": 219,
    "f": 980
  },
  {
    "day": "2022-10-15T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 686,
    "b": 274,
    "c": 40,
    "d": 325,
    "e": 894,
    "f": 545
  },
  {
    "day": "2022-10-15T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 137,
    "b": 59,
    "c": 697,
    "d": 595,
    "e": 403,
    "f": 492
  },
  {
    "day": "2022-10-16T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 675,
    "b": 333,
    "c": 343,
    "d": 82,
    "e": 953,
    "f": 111
  },
  {
    "day": "2022-10-16T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 416,
    "b": 207,
    "c": 704,
    "d": 214,
    "e": 666,
    "f": 188
  },
  {
    "day": "2022-10-16T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 981,
    "b": 752,
    "c": 71,
    "d": 335,
    "e": 784,
    "f": 319
  },
  {
    "day": "2022-10-16T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 640,
    "b": 285,
    "c": 375,
    "d": 699,
    "e": 955,
    "f": 278
  },
  {
    "day": "2022-10-17T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 595,
    "b": 144,
    "c": 430,
    "d": 866,
    "e": 927,
    "f": 244
  },
  {
    "day": "2022-10-17T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 812,
    "b": 485,
    "c": 699,
    "d": 812,
    "e": 428,
    "f": 571
  },
  {
    "day": "2022-10-17T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 736,
    "b": 192,
    "c": 222,
    "d": 135,
    "e": 673,
    "f": 56
  },
  {
    "day": "2022-10-17T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 23,
    "b": 501,
    "c": 946,
    "d": 558,
    "e": 441,
    "f": 684
  },
  {
    "day": "2022-10-18T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 262,
    "b": 247,
    "c": 420,
    "d": 687,
    "e": 702,
    "f": 407
  },
  {
    "day": "2022-10-18T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 399,
    "b": 571,
    "c": 31,
    "d": 677,
    "e": 742,
    "f": 416
  },
  {
    "day": "2022-10-18T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 931,
    "b": 721,
    "c": 901,
    "d": 670,
    "e": 868,
    "f": 687
  },
  {
    "day": "2022-10-18T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 554,
    "b": 87,
    "c": 238,
    "d": 530,
    "e": 35,
    "f": 327
  },
  {
    "day": "2022-10-19T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 142,
    "b": 352,
    "c": 820,
    "d": 126,
    "e": 448,
    "f": 556
  },
  {
    "day": "2022-10-19T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 777,
    "b": 70,
    "c": 617,
    "d": 877,
    "e": 55,
    "f": 172
  },
  {
    "day": "2022-10-19T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 474,
    "b": 930,
    "c": 326,
    "d": 535,
    "e": 619,
    "f": 21
  },
  {
    "day": "2022-10-19T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 525,
    "b": 363,
    "c": 493,
    "d": 243,
    "e": 154,
    "f": 756
  },
  {
    "day": "2022-10-20T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 625,
    "b": 669,
    "c": 344,
    "d": 610,
    "e": 65,
    "f": 319
  },
  {
    "day": "2022-10-20T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 273,
    "b": 282,
    "c": 696,
    "d": 818,
    "e": 408,
    "f": 387
  },
  {
    "day": "2022-10-20T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 359,
    "b": 296,
    "c": 353,
    "d": 387,
    "e": 806,
    "f": 494
  },
  {
    "day": "2022-10-20T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 887,
    "b": 360,
    "c": 765,
    "d": 217,
    "e": 466,
    "f": 128
  },
  {
    "day": "2022-10-21T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 758,
    "b": 668,
    "c": 465,
    "d": 171,
    "e": 742,
    "f": 626
  },
  {
    "day": "2022-10-21T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 224,
    "b": 153,
    "c": 766,
    "d": 185,
    "e": 653,
    "f": 172
  },
  {
    "day": "2022-10-21T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 272,
    "b": 176,
    "c": 767,
    "d": 738,
    "e": 256,
    "f": 262
  },
  {
    "day": "2022-10-21T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 394,
    "b": 431,
    "c": 908,
    "d": 481,
    "e": 268,
    "f": 816
  },
  {
    "day": "2022-10-22T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 188,
    "b": 328,
    "c": 79,
    "d": 565,
    "e": 952,
    "f": 928
  },
  {
    "day": "2022-10-22T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 144,
    "b": 485,
    "c": 628,
    "d": 626,
    "e": 17,
    "f": 911
  },
  {
    "day": "2022-10-22T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 632,
    "b": 260,
    "c": 991,
    "d": 290,
    "e": 94,
    "f": 544
  },
  {
    "day": "2022-10-22T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 123,
    "b": 342,
    "c": 718,
    "d": 862,
    "e": 105,
    "f": 141
  },
  {
    "day": "2022-10-23T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 850,
    "b": 766,
    "c": 657,
    "d": 680,
    "e": 543,
    "f": 536
  },
  {
    "day": "2022-10-23T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 875,
    "b": 943,
    "c": 710,
    "d": 33,
    "e": 764,
    "f": 886
  },
  {
    "day": "2022-10-23T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 516,
    "b": 208,
    "c": 291,
    "d": 364,
    "e": 352,
    "f": 121
  },
  {
    "day": "2022-10-23T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 305,
    "b": 427,
    "c": 597,
    "d": 175,
    "e": 868,
    "f": 617
  },
  {
    "day": "2022-10-24T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 238,
    "b": 715,
    "c": 110,
    "d": 390,
    "e": 84,
    "f": 387
  },
  {
    "day": "2022-10-24T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 261,
    "b": 734,
    "c": 923,
    "d": 271,
    "e": 404,
    "f": 128
  },
  {
    "day": "2022-10-24T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 220,
    "b": 763,
    "c": 464,
    "d": 226,
    "e": 531,
    "f": 795
  },
  {
    "day": "2022-10-24T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 521,
    "b": 319,
    "c": 801,
    "d": 95,
    "e": 969,
    "f": 224
  },
  {
    "day": "2022-10-25T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 627,
    "b": 196,
    "c": 814,
    "d": 495,
    "e": 441,
    "f": 659
  },
  {
    "day": "2022-10-25T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 960,
    "b": 634,
    "c": 988,
    "d": 585,
    "e": 237,
    "f": 821
  },
  {
    "day": "2022-10-25T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 269,
    "b": 13,
    "c": 672,
    "d": 97,
    "e": 169,
    "f": 183
  },
  {
    "day": "2022-10-25T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 523,
    "b": 766,
    "c": 182,
    "d": 96,
    "e": 633,
    "f": 534
  },
  {
    "day": "2022-10-26T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 423,
    "b": 830,
    "c": 628,
    "d": 116,
    "e": 640,
    "f": 81
  },
  {
    "day": "2022-10-26T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 494,
    "b": 419,
    "c": 315,
    "d": 985,
    "e": 758,
    "f": 236
  },
  {
    "day": "2022-10-26T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 527,
    "b": 658,
    "c": 581,
    "d": 417,
    "e": 548,
    "f": 703
  },
  {
    "day": "2022-10-26T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 100,
    "b": 10,
    "c": 99,
    "d": 495,
    "e": 768,
    "f": 711
  },
  {
    "day": "2022-10-27T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 977,
    "b": 708,
    "c": 559,
    "d": 28,
    "e": 413,
    "f": 419
  },
  {
    "day": "2022-10-27T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 828,
    "b": 681,
    "c": 270,
    "d": 387,
    "e": 833,
    "f": 340
  },
  {
    "day": "2022-10-27T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 678,
    "b": 33,
    "c": 185,
    "d": 517,
    "e": 527,
    "f": 701
  },
  {
    "day": "2022-10-27T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 648,
    "b": 321,
    "c": 71,
    "d": 281,
    "e": 364,
    "f": 733
  },
  {
    "day": "2022-10-28T18:30:00.000Z",
    "age": "15-25",
    "gender": "Male",
    "a": 531,
    "b": 413,
    "c": 656,
    "d": 679,
    "e": 489,
    "f": 585
  },
  {
    "day": "2022-10-28T18:30:00.000Z",
    "age": ">25",
    "gender": "Male",
    "a": 264,
    "b": 390,
    "c": 852,
    "d": 357,
    "e": 415,
    "f": 854
  },
  {
    "day": "2022-10-28T18:30:00.000Z",
    "age": "15-25",
    "gender": "Female",
    "a": 793,
    "b": 407,
    "c": 746,
    "d": 158,
    "e": 192,
    "f": 732
  },
  {
    "day": "2022-10-28T18:30:00.000Z",
    "age": ">25",
    "gender": "Female",
    "a": 372,
    "b": 242,
    "c": 611,
    "d": 126,
    "e": 889,
    "f": 478
  }
]
export default function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    startDate: new Date("2022-10-12"),
    endDate: new Date("2022-10-21"),
    age: "15-25",
    gender: "Male",
  });
  const [category, setCategory] = useState("a");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://moonshotdatavisulalizationserver.parasarya2.repl.co/data"
        );
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const dateRange = {
      startDate: new Date(searchParams.get("startDate")),
      endDate: new Date(searchParams.get("endDate")),
    };
    const ageParams = searchParams.get("age");
    const genderParams = searchParams.get("gender");
    setFilteredData(() => filter(data, dateRange, ageParams, genderParams));
  }, [data,searchParams]);
  return (
    <div className="App">
      <h1>Data Visualizer</h1>
      <div className="filters">
        <DateRangePicker
          ranges={[
            {
              startDate: new Date(searchParams.get("startDate")),
              endDate: new Date(searchParams.get("endDate")),
            },
          ]}
          onChange={(ranges) => {
            setSearchParams(
              (prev) => {
                prev.set("startDate", ranges.range1.startDate);
                prev.set("endDate", ranges.range1.endDate);
                return prev;
              },
              { replace: true }
            );
          }}
        />
        <div>
        <label>
          Age:
          <select
            onChange={(e) => {
              setSearchParams((prev) => {
                prev.set("age", e.target.value);
                return prev;
              });
            }}
          >
            <option value="15-25">15-25</option>
            <option value=">25">{">25"}</option>
          </select>
        </label>
        <label>
          Gender:
          <select
            onChange={(e) => {
              setSearchParams((prev) => {
                prev.set("gender", e.target.value);
                return prev;
              });
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        </div>
      </div>
      <div className="graphs">
        <BarChartComponent data={filteredData} setCategory={setCategory} />
        <LineChartComponent data={filteredData} category={category} />
      </div>
    </div>
  );
}
