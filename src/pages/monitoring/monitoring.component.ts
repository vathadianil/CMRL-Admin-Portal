import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MouseEventsOnMapDirective } from '../../directives/mouse-events-on-map.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    MouseEventsOnMapDirective,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss',
})
export class MonitoringComponent {
  purpleLineData = [
    {
      top: 47.5,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0101',
      stationName: 'Madhavaram Milk Colony',
      color:'linear-gradient(to bottom, #730176, #a5006e, #d00059, #ef003a, #ff0000)'
    },
    {
      top: 80,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0102',
      stationName: 'Thapalpetti',
      color:'#7f0183'
    },
    {
      top: 112.9,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0103',
      stationName: 'Madhavaram High Road',
      color:'#7f0183'
    },
    {
      top: 140.9,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0104',
      stationName: 'Moolakadai',
      color:'#7f0183'
    },
    {
      top: 173.5,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0105',
      stationName: 'Sembiyam',
      color:'#7f0183'
    },
    {
      top: 201.5,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0106',
      stationName: 'Perambur Market',
      color:'#7f0183'
    },
    {
      top: 239.8,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0107',
      stationName: 'Perambur Metro',
      color:'#7f0183'
    },
    {
      top: 269.8,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0108',
      stationName: 'Ayanavaram',
      color:'#7f0183'
    },
    {
      top: 301,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0109',
      stationName: 'Otteri',
      color:'#7f0183'
    },
    {
      top: 330.8,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0110',
      stationName: 'Pattalam',
      color:'#7f0183'
    },
    {
      top: 361.5,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0111',
      stationName: 'Perambur Barracks Road',
      color:'#7f0183'
    },
    {
      top: 392.5,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0112',
      stationName: 'Purasaiwakkam',
      color:'#7f0183'
    },
    {
      top: 422.8,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0113',
      stationName: 'Kelleys',
      color:'#7f0183'
    },
    {
      top: 462.5,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0114',
      stationName: 'Kilpauk',
      color:'linear-gradient(to bottom, #730176, #af0043, #b43c00, #8c7900, #1ba40b)'
    },
    {
      top: 498,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0115',
      stationName: 'Chetpet Metro',
      color:'#7f0183'
    },
    {
      top: 533.77,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0116',
      stationName: 'Chetpet',
      color:'#7f0183'
    },
    {
      top: 570,
      bottom: 0,
      left: 837.5,
      right: 0,
      isActive: true,
      stationId: '0117',
      stationName: 'Sterling Road Jn',
      color:'#7f0183'
    },
     {
      top: 620,
      bottom: 0,
      left: 841.5,
      right: 0,
      isActive: true,
      stationId: '0118',
      stationName: 'Anna Flyover',
      color:'#7f0183'
    },
    {
      top: 636,
      bottom: 0,
      left: 887.5,
      right: 0,
      isActive: true,
      stationId: '0119',
      stationName: 'Thousand Lights',
      color:'linear-gradient(to bottom, #730176, #73008d, #6c00a8, #5700c5, #0b17e5)'
    },
     {
      top: 665,
      bottom: 0,
      left: 935,
      right: 0,
      isActive: true,
      stationId: '0120',
      stationName: 'Royapettah',
      color:'#7f0183'
    },
    {
      top: 702.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0121',
      stationName: 'Dr.Radhakrishnan Salai',
      color:'#7f0183'
    },
      {
      top: 751,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0122',
      stationName: 'Thirumayilai',
      color:'linear-gradient(to bottom, #730176, #b3006a, #e12554, #fa5f36, #ff9806)'
    },
     {
      top: 808.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0123',
      stationName: 'Mandaiveli Metro',
      color:'#7f0183'
    },
     {
      top: 842.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0124',
      stationName: 'Greenways Road Metro',
      color:'#7f0183'
    },
    {
      top: 878.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0125',
      stationName: 'Adyar Junction',
      color:'#7f0183'
    },
    {
      top: 910.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0126',
      stationName: 'Adyar Depot',
      color:'#7f0183'
    },
    {
      top: 942.8,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0127',
      stationName: 'Indira Nagar Metro',
      color:'#7f0183'
    },
    {
      top: 975,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0128',
      stationName: 'Thiruvanmiyur Metro',
      color:'#7f0183'
    },
    {
      top: 1010.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0129',
      stationName: 'Taramani Junction',
      color:'#7f0183'
    },
    {
      top: 1043.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0130',
      stationName: 'Nehru Nagar',
      color:'#7f0183'
    },
    {
      top: 1077.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0131',
      stationName: 'Kandanchavadi',
      color:'#7f0183'
    },
    {
      top: 1111.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0132',
      stationName: 'Perungudi Metro',
      color:'#7f0183'
    },
    {
      top: 1141.8,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0133',
      stationName: 'Thoraipakkam',
      color:'#7f0183'
    },
    {
      top: 1176,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0134',
      stationName: 'Mettukuppam',
      color:'#7f0183'
    },
    {
      top: 1210,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0135',
      stationName: 'P.T.C. Colony',
      color:'#7f0183'
    },
    {
      top: 1244,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0136',
      stationName: 'Okkiyampet',
      color:'#7f0183'
    },
    {
      top: 1278,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0137',
      stationName: 'Karapakkam',
      color:'#7f0183'
    },
    {
      top: 1312.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0138',
      stationName: 'Okkiyam Thoraipakkam',
      color:'#7f0183'
    },
    {
      top: 1346.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0139',
      stationName: 'Sholinganallur',
      color:'linear-gradient(to bottom, #730176, #a5006e, #d00059, #ef003a, #ff0000)'
    },
    {
      top: 1380.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0140',
      stationName: 'Sholinganallur Lake',
      color:'#7f0183'
    },
    {
      top: 1410.8,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0141',
      stationName: 'Ponniamman Temple',
      color:'#7f0183'
    },
     {
      top: 1444.8,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0142',
      stationName: 'Sathyabama University',
      color:'#7f0183'
    },
     {
      top: 1477.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0143',
      stationName: 'Semmancheri',
      color:'#7f0183'
    },
    {
      top: 1511.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0144',
      stationName: 'Gandhi Nagar',
      color:'#7f0183'
    },
    {
      top: 1542.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0145',
      stationName: 'Navalur',
      color:'#7f0183'
    },
    {
      top: 1574.5,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0146',
      stationName: 'Siruseri',
      color:'#7f0183'
    },
    {
      top: 1610,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0147',
      stationName: 'Sipcot 1',
      color:'#7f0183'
    },
    {
      top: 1648,
      bottom: 0,
      left: 936,
      right: 0,
      isActive: true,
      stationId: '0148',
      stationName: 'Sipcot 2',
      color:'#7f0183'
    },
  ];

  redLineData=[
    {
      top: 39.4,
      bottom: 0,
      left: 602.5,
      right: 0,
      isActive: true,
      stationId: '0201',
      stationName: 'Velmugugan Nagar',
      color:'#ff0000'
    },
    {
      top: 39.5,
      bottom: 0,
      left: 652.5,
      right: 0,
      isActive: true,
      stationId: '0202',
      stationName: 'Manjambakkam',
      color:'#ff0000'
    },
    {
      top: 38.9,
      bottom: 0,
      left: 715,
      right: 0,
      isActive: false,
      stationId: '0203',
      stationName: 'Assissi Nagar',
      color:'#ff0000'
    },

    {
      top: 39.5,
      bottom: 0,
      left: 778,
      right: 0,
      isActive: true,
      stationId: '0204',
      stationName: 'Venugopal Nagar',
      color:'#ff0000'
    },
    {
      top: 55,
      bottom: 0,
      left: 566.5,
      right: 0,
      isActive: true,
      stationId: '0205',
      stationName: 'Madhavaram Bus Terminus',
      color:'#ff0000'
    },
    {
      top: 87.5,
      bottom: 0,
      left: 535.5,
      right: 0,
      isActive: true,
      stationId: '0206',
      stationName: 'Shastri Nagar',
      color:'#ff0000'
    },
    {
      top: 122,
      bottom: 0,
      left: 523,
      right: 0,
      isActive: true,
      stationId: '0207',
      stationName: 'Retteri Jn',
      color:'#ff0000'
    },
    {
      top: 153.5,
      bottom: 0,
      left: 518,
      right: 0,
      isActive: true,
      stationId: '0208',
      stationName: 'Kolathur Jn',
      color:'#ff0000'
    },
    {
      top: 187.5,
      bottom: 0,
      left: 518,
      right: 0,
      isActive: true,
      stationId: '0209',
      stationName: 'Srinivasa Nagar',
      color:'#ff0000'
    },
    {
      top: 238,
      bottom: 0,
      left: 516.5,
      right: 0,
      isActive: true,
      stationId: '0210',
      stationName: 'Villivakkam Metro',
      color:'#ff0000'
    },
    {
      top: 276,
      bottom: 0,
      left: 516.5,
      right: 0,
      isActive: true,
      stationId: '0210',
      stationName: 'Villivakkam Bus Terminus',
      color:'#ff0000'
    },
    {
      top: 306,
      bottom: 0,
      left: 516.5,
      right: 0,
      isActive: true,
      stationId: '0211',
      stationName: 'Nadhamuni',
      color:'#ff0000'
    },
    {
      top: 335,
      bottom: 0,
      left: 517,
      right: 0,
      isActive: true,
      stationId: '0212',
      stationName: 'Anna Nagar Depot',
      color:'#ff0000'
    },
    {
      top: 372.5,
      bottom: 0,
      left: 575.5,
      right: 0,
      isActive: true,
      stationId: '0213',
      stationName: 'Thirumangalam',
      color:'linear-gradient(to bottom, #ff0000, #da5f00, #ab8300, #749900, #1ca80b)'
    },
    {
      top: 408.5,
      bottom: 0,
      left: 607.5,
      right: 0,
      isActive: true,
      stationId: '0214',
      stationName: 'Anna Nagar K.V.',
      color:'#ff0000'
    },
    {
      top: 465.5,
      bottom: 0,
      left: 620,
      right: 0,
      isActive: true,
      stationId: '0214',
      stationName: 'Koyambedu 100 Ft. Road',
      color:'#ff0000'
    },
    {
      top: 550,
      bottom: 0,
      left: 575.5,
      right: 0,
      isActive: true,
      stationId: '0215',
      stationName: 'Puratchi Thalaivi Dr.J. Jayalalitha',
      color:'linear-gradient(to bottom, #ff0000, #da5f00, #ab8300, #749900, #1ca80b)'
    },
    {
      top: 566.8,
      bottom: 0,
      left: 543,
      right: 0,
      isActive: true,
      stationId: '0216',
      stationName: 'Koyambedu Market',
      color:'#ff0000'
    },
    {
      top: 587.5,
      bottom: 0,
      left: 518,
      right: 0,
      isActive: true,
      stationId: '0217',
      stationName: 'Natesan Nagar',
      color:'#ff0000'
    },
    {
      top: 627.5,
      bottom: 0,
      left: 518,
      right: 0,
      isActive: true,
      stationId: '0218',
      stationName: 'Virugambakkam',
      color:'#ff0000'
    },
    // ==============Gradient color================
    {
      top: 685,
      bottom: 0,
      left: 494,
      right: 0,
      isActive: true,
      stationId: '0219',
      stationName: 'Alwarthirunagar',
      color:'linear-gradient(to bottom, #ff0000, #ff4700, #ff6700, #ff8100, #ff9806)'
    },
    {
      top: 685,
      bottom: 0,
      left: 442.5,
      right: 0,
      isActive: true,
      stationId: '0220',
      stationName: 'Valasaravakkam',
      color:'linear-gradient(to bottom, #ff0000, #ff4700, #ff6700, #ff8100, #ff9806)'
    },
    {
      top: 685,
      bottom: 0,
      left: 390.5,
      right: 0,
      isActive: true,
      stationId: '0221',
      stationName: 'Karambakkam',
      color:'linear-gradient(to bottom, #ff0000, #ff4700, #ff6700, #ff8100, #ff9806)'
    },
    {
      top: 685,
      bottom: 0,
      left: 338.5,
      right: 0,
      isActive: true,
      stationId: '0222',
      stationName: 'Alapakkam',
      color:'linear-gradient(to bottom, #ff0000, #ff4700, #ff6700, #ff8100, #ff9806)'
    },
    {
      top: 685,
      bottom: 0,
      left: 286.5,
      right: 0,
      isActive: true,
      stationId: '0223',
      stationName: 'Porur Junction',
      color:'linear-gradient(to bottom, #ff0000, #ff4700, #ff6700, #ff8100, #ff9806)'
    },
// ===========Red Color===========
    {
       top: 756.5,
       bottom: 0,
       left: 283.5,
       right: 0,
       isActive: true,
       stationId: '0224',
       stationName: 'Mugalivakkam',
       color:'#ff0000'
    },
    {
      top: 822.5,
      bottom: 0,
      left: 317.5,
      right: 0,
      isActive: true,
      stationId: '0225',
      stationName: 'Ramapuram',
      color:'#ff0000'
   },
   {
    top: 869.5,
    bottom: 0,
    left: 383.5,
    right: 0,
    isActive: true,
    stationId: '0226',
    stationName: 'Manapakkam',
    color:'#ff0000'
 },
 {
  top: 876.5,
  bottom: 0,
  left: 460.5,
  right: 0,
  isActive: true,
  stationId: '0227',
  stationName: 'Chennai Trade Center',
  color:'#ff0000'
},
{
  top: 876.5,
  bottom: 0,
  left: 543.5,
  right: 0,
  isActive: true,
  stationId: '0228',
  stationName: 'But Road',
  color:'#ff0000'
},
{
  top: 914.5,
  bottom: 0,
  left: 631.5,
  right: 0,
  isActive: true,
  stationId: '0229',
  stationName: 'Arignar Anna',
  color:'linear-gradient(to top, #0b17e5, #006eff, #008bda, #009d76, #1ca80b)'
},
{
  top: 962.5,
  bottom: 0,
  left: 623.5,
  right: 0,
  isActive: true,
  stationId: '0230',
  stationName: 'St. Thomas Mount',
  color:'linear-gradient(to top, #ff0000, #da5f00, #ab8300, #749900, #1ca80b)'
},
{
  top: 1010.5,
  bottom: 0,
  left: 634.5,
  right: 0,
  isActive: true,
  stationId: '0230',
  stationName: 'Adambakkam Metro',
  color:'#ff0000'
},
{
  top: 1062,
  bottom: 0,
  left: 635,
  right: 0,
  isActive: true,
  stationId: '0231',
  stationName: 'Vanuvampet',
  color:'#ff0000'
},
{
  top: 1094,
  bottom: 0,
  left: 635.5,
  right: 0,
  isActive: true,
  stationId: '0232',
  stationName: 'Puzhuthivakkam Metro',
  color:'#ff0000'
},
{
  top: 1126.5,
  bottom: 0,
  left: 635,
  right: 0,
  isActive: true,
  stationId: '0233',
  stationName: 'Madipakkam',
  color:'#ff0000'
},
{
  top: 1160.5,
  bottom: 0,
  left: 635,
  right: 0,
  isActive: true,
  stationId: '0234',
  stationName: 'Kilkattalai',
  color:'#ff0000'
},
{
  top: 1192.5,
  bottom: 0,
  left: 635,
  right: 0,
  isActive: true,
  stationId: '0235',
  stationName: 'Echangadu',
  color:'#ff0000'
},
{
  top: 1226.5,
  bottom: 0,
  left: 639,
  right: 0,
  isActive: true,
  stationId: '0236',
  stationName: 'Kovilambakkam',
  color:'#ff0000'
},
{
  top: 1259.5,
  bottom: 0,
  left: 648,
  right: 0,
  isActive: true,
  stationId: '0237',
  stationName: 'Vellakkal',
  color:'#ff0000'
},
{
  top: 1287.5,
  bottom: 0,
  left: 667,
  right: 0,
  isActive: true,
  stationId: '0238',
  stationName: 'Medavakkam Koot Road',
  color:'#ff0000'
},
{
  top: 1312.5,
  bottom: 0,
  left: 699.5,
  right: 0,
  isActive: true,
  stationId: '0239',
  stationName: 'Kamaraj Garden',
  color:'#ff0000'
},
{
  top: 1330.5,
  bottom: 0,
  left: 733.5,
  right: 0,
  isActive: true,
  stationId: '0240',
  stationName: 'Medavakkam Jn',
  color:'#ff0000'
},
{
  top: 1343.5,
  bottom: 0,
  left: 777,
  right: 0,
  isActive: true,
  stationId: '0241',
  stationName: 'Perumbakkam',
  color:'#ff0000'
},
{
  top: 1343.5,
  bottom: 0,
  left: 836,
  right: 0,
  isActive: true,
  stationId: '0242',
  stationName: 'Classical Tamil Institute',
  color:'#ff0000'
},
{
  top: 1343.5,
  bottom: 0,
  left: 888,
  right: 0,
  isActive: true,
  stationId: '0243',
  stationName: 'Elcot',
  color:'#ff0000'
},
  ];

  OrangeLineData =[
    {
      top: 685,
      bottom: 0,
      left: 242,
      right: 0,
      isActive: true,
      stationId: '0301',
      stationName: 'Porur Bypass',
      color:'#ff9806'
    },
    {
      top: 685,
      bottom: 0,
      left: 201,
      right: 0,
      isActive: true,
      stationId: '0302',
      stationName: 'Thelliyaragaram',
      color:'#ff9806'
    },
    {
      top: 685,
      bottom: 0,
      left: 158,
      right: 0,
      isActive: true,
      stationId: '0303',
      stationName: 'Iyyapanthangal',
      color:'#ff9806'
    },
    {
      top: 659,
      bottom: 0,
      left: 123.5,
      right: 0,
      isActive: true,
      stationId: '0304',
      stationName: 'Kattupakkam',
      color:'#ff9806'
    },
    {
      top: 632.5,
      bottom: 0,
      left: 98.5,
      right: 0,
      isActive: true,
      stationId: '0305',
      stationName: 'Kumananchavadi',
      color:'#ff9806'
    },
    {
      top: 603.5,
      bottom: 0,
      left: 71.55,
      right: 0,
      isActive: true,
      stationId: '0305',
      stationName: 'Karayanchavadi',
      color:'#ff9806'
    },
    {
      top: 575,
      bottom: 0,
      left: 47,
      right: 0,
      isActive: true,
      stationId: '0306',
      stationName: 'Mullai Thottam',
      color:'#ff9806'
    },
    {
      top: 547,
      bottom: 0,
      left: 19.5,
      right: 0,
      isActive: true,
      stationId: '0307',
      stationName: 'Poonamallee',
      color:'#ff9806'
    },
    {
      top: 518.5,
      bottom: 0,
      left: -7,
      right: 0,
      isActive: true,
      stationId: '0308',
      stationName: 'Poonamallee Bypass',
      color:'#ff9806'
    },
    {
      top: 685,
      bottom: 0,
      left: 538,
      right: 0,
      isActive: true,
      stationId: '0309',
      stationName: 'Avichi School',
      color:'#ff9806'
    },
    {
      top: 685,
      bottom: 0,
      left: 581,
      right: 0,
      isActive: true,
      stationId: '0310',
      stationName: 'Saligramam',
      color:'#ff9806'
    },
    {
      top: 682.5,
      bottom: 0,
      left: 624.5,
      right: 0,
      isActive: true,
      stationId: '0311',
      stationName: 'Vadapalani',
      color:'linear-gradient(to bottom, #1ca80b, #71a900, #a6a700, #d5a100, #ff9806)'
    },
    {
      top: 654.5,
      bottom: 0,
      left: 660,
      right: 0,
      isActive: true,
      stationId: '0312',
      stationName: 'Power House',
      color:'#ff9806'
    },
    {
      top: 623.5,
      bottom: 0,
      left: 701,
      right: 0,
      isActive: true,
      stationId: '0313',
      stationName: 'Meenakshi College',
      color:'#ff9806'
    },
    {
      top: 632.5,
      bottom: 0,
      left: 755,
      right: 0,
      isActive: true,
      stationId: '0314',
      stationName: 'Nungambak Kam Metro',
      color:'#ff9806'
    },
    {
      top: 688,
      bottom: 0,
      left: 775,
      right: 0,
      isActive: true,
      stationId: '0315',
      stationName: 'Panagal Park',
      color:'#ff9806'
    },
    {
      top: 749,
      bottom: 0,
      left: 780,
      right: 0,
      isActive: true,
      stationId: '0316',
      stationName: 'Nandanam',
      color:'linear-gradient(to bottom, #0b17e5, #d000ab, #ff006b, #ff4936, #ff9806)'
    },
    {
      top: 776.5,
      bottom: 0,
      left: 791,
      right: 0,
      isActive: true,
      stationId: '0317',
      stationName: 'Boat Club',
      color:'#ff9806'
    },
    {
      top: 783.5,
      bottom: 0,
      left: 827,
      right: 0,
      isActive: true,
      stationId: '0318',
      stationName: 'Bharathidasan Road',
      color:'#ff9806'
    },
    {
      top: 751,
      bottom: 0,
      left: 888,
      right: 0,
      isActive: true,
      stationId: '0319',
      stationName: 'Alwarpet',
      color:'#ff9806'
    },
    {
      top: 751,
      bottom: 0,
      left: 1020.5,
      right: 0,
      isActive: true,
      stationId: '0320',
      stationName: 'Kutchery Road',
      color:'#ff9806'
    },
    {
      top: 710,
      bottom: 0,
      left: 1056.5,
      right: 0,
      isActive: true,
      stationId: '0321',
      stationName: 'Lighthouse Metro',
      color:'#ff9806'
    },
  ];
  
  BlueLineData=[
    {
      top: 1063.5,
      bottom: 0,
      left: 491.5,
      right: 0,
      isActive: true,
      stationId: '0401',
      stationName: 'Airport',
      color:'linear-gradient(to bottom, #0b17e5, #006eff, #008bda, #009d76, #1ca80b)'
    },
    {
      top: 1016.5,
      bottom: 0,
      left: 531.5,
      right: 0,
      isActive: true,
      stationId: '0402',
      stationName: 'Meenambakkam Metro',
      color:'linear-gradient(to bottom, #0b17e5, #006eff, #008bda, #009d76, #1ca80b)'
    },
    {
      top: 966,
      bottom: 0,
      left: 579.5,
      right: 0,
      isActive: true,
      stationId: '0403',
      stationName: 'Nanganallur Road',
      color:'linear-gradient(to bottom, #0b17e5, #006eff, #008bda, #009d76, #1ca80b)'
    },
    {
      top: 880,
      bottom: 0,
      left: 660,
      right: 0,
      isActive: true,
      stationId: '0404',
      stationName: 'Guindy Metro',
      color:'#0b17e5'
    },
    {
      top: 846,
      bottom: 0,
      left: 690,
      right: 0,
      isActive: true,
      stationId: '0404',
      stationName: 'Litle Mount',
      color:'#0b17e5'
    },
    {
      top: 814,
      bottom: 0,
      left: 721,
      right: 0,
      isActive: true,
      stationId: '0405',
      stationName: 'Saidapet Metro',
      color:'#0b17e5'
    },
    {
      top: 713,
      bottom: 0,
      left: 816.5,
      right: 0,
      isActive: true,
      stationId: '0406',
      stationName: 'Teynampet',
      color:'#0b17e5'
    },
    {
      top: 674,
      bottom: 0,
      left: 852,
      right: 0,
      isActive: true,
      stationId: '0407',
      stationName: 'AG-DMS',
      color:'#0b17e5'
    },
    {
      top: 592,
      bottom: 0,
      left: 927.5,
      right: 0,
      isActive: true,
      stationId: '0408',
      stationName: 'LIC',
      color:'#0b17e5'
    },
    {
      top: 548,
      bottom: 0,
      left: 969,
      right: 0,
      isActive: true,
      stationId: '0409',
      stationName: 'Government Estate',
      color:'#0b17e5'
    },
    {
      top: 475,
      bottom: 0,
      left: 1028.5,
      right: 0,
      isActive: true,
      stationId: '0410',
      stationName: 'Puratchi Thalaivar Dr.M.G.R Center',
      color:'linear-gradient(to top, #0b17e5, #006eff, #008bda, #009d76, #1ca80b)'
    },
    {
      top: 475,
      bottom: 0,
      left: 1080,
      right: 0,
      isActive: true,
      stationId: '0411',
      stationName: 'High Court',
      color:'#0b17e5'
    },
    {
      top: 405,
      bottom: 0,
      left: 1092.5,
      right: 0,
      isActive: true,
      stationId: '0412',
      stationName: 'Mannadi',
      color:'#0b17e5'
    },
    {
      top: 337,
      bottom: 0,
      left: 1092.5,
      right: 0,
      isActive: true,
      stationId: '0413',
      stationName: 'Washermanpet Metro',
      color:'#0b17e5'
    },
    {
      top: 302.5,
      bottom: 0,
      left: 1092.5,
      right: 0,
      isActive: true,
      stationId: '0414',
      stationName: 'Sir Thyagaraya College',
      color:'#0b17e5'
    },
    {
      top: 263.5,
      bottom: 0,
      left: 1092.5,
      right: 0,
      isActive: true,
      stationId: '0415',
      stationName: 'Thondiarpet Metro',
      color:'#0b17e5'
    },
    {
      top: 229,
      bottom: 0,
      left: 1092.5,
      right: 0,
      isActive: true,
      stationId: '0416',
      stationName: 'New Washermanpet',
      color:'#0b17e5'
    },
    {
      top: 197,
      bottom: 0,
      left: 1092.5,
      right: 0,
      isActive: true,
      stationId: '0417',
      stationName: 'Tollgate',
      color:'#0b17e5'
    },
    {
      top: 161,
      bottom: 0,
      left: 1092.5,
      right: 0,
      isActive: true,
      stationId: '0418',
      stationName: 'Kaladipet',
      color:'#0b17e5'
    },
    {
      top: 125,
      bottom: 0,
      left: 1092.5,
      right: 0,
      isActive: true,
      stationId: '0419',
      stationName: 'Thiruvottriyur Theradi',
      color:'#0b17e5'
    },
    {
      top: 89,
      bottom: 0,
      left: 1092.5,
      right: 0,
      isActive: true,
      stationId: '0420',
      stationName: 'Thiruvottriyur Metro',
      color:'#0b17e5'
    },
    {
      top: 55,
      bottom: 0,
      left: 1092.5,
      right: 0,
      isActive: true,
      stationId: '0421',
      stationName: 'WIMCO Nagar Metro',
      color:'#0b17e5'
    },
    {
      top: 17.5,
      bottom: 0,
      left: 1092.5,
      right: 0,
      isActive: true,
      stationId: '0422',
      stationName: 'WIMCO Nagar Depot',
      color:'#0b17e5'
    },
  ];

  GreenLineData=[
    {
      top: 612.5,
      bottom: 0,
      left: 624.5,
      right: 0,
      isActive: true,
      stationId: '0501',
      stationName: 'Power House',
      color:'#1ca80b'
    },
    {
      top: 453,
      bottom: 0,
      left: 533,
      right: 0,
      isActive: true,
      stationId: '0502',
      stationName: 'Koyambedu',
      color:'#1ca80b'
    },
    {
      top: 352.5,
      bottom: 0,
      left: 635,
      right: 0,
      isActive: true,
      stationId: '0503',
      stationName: 'Anna Nagar Tower',
      color:'#1ca80b'
    },
    {
      top: 363.5,
      bottom: 0,
      left: 680,
      right: 0,
      isActive: true,
      stationId: '0504',
      stationName: 'Anna Nagar East',
      color:'#1ca80b'
    },
    {
      top: 399,
      bottom: 0,
      left: 715.5,
      right: 0,
      isActive: true,
      stationId: '0505',
      stationName: 'Shenoy Nagar',
      color:'#1ca80b'
    },
    {
      top: 462.5,
      bottom: 0,
      left: 779,
      right: 0,
      isActive: true,
      stationId: '0506',
      stationName: 'Pachayiyappas College',
      color:'#1ca80b'
    },
    {
      top: 462.5,
      bottom: 0,
      left: 889.5,
      right: 0,
      isActive: true,
      stationId: '0507',
      stationName: 'Nehru Park',
      color:'#1ca80b'
    },
    {
      top: 462.5,
      bottom: 0,
      left: 952.5,
      right: 0,
      isActive: true,
      stationId: '0508',
      stationName: 'Egmore Metro',
      color:'#1ca80b'
    },
    {
      top: 752,
      bottom: 0,
      left: 624.5,
      right: 0,
      isActive: true,
      stationId: '0509',
      stationName: '',
      color:'#1ca80b'
    },
    {
      top: 826.5,
      bottom: 0,
      left: 624.5,
      right: 0,
      isActive: true,
      stationId: '0510',
      stationName: 'Saidapet Metro',
      color:'#1ca80b'
    },
  ];
}
