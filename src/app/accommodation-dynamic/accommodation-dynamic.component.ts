import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';// ADDED RAMESH PILLAR ID

@Component({
  selector: 'app-accommodation-dynamic',
  templateUrl: './accommodation-dynamic.component.html',
  styleUrls: ['./accommodation-dynamic.component.css']
})
export class AccommodationDynamicComponent implements OnInit {
  //Start our work
  @ViewChild('frame1') frame1:ElementRef;
  @ViewChild('frame2') frame2:ElementRef;
  @ViewChild('frame3') frame3:ElementRef;
  @ViewChild('frame4') frame4:ElementRef;
  @ViewChild('frame5') frame5:ElementRef;
  totalMerch:any=[];
  merchid:number=1;
  PartApic1:string;  PartApic2:string;  PartApic3:string;  PartApic4:string;
  PartBpic1:string;  PartBpic2:string;  PartBpic3:string;  PartBpic4:string;
  PartCpic1:string;  PartCpic2:string;  PartCpic3:string;  PartCpic4:string;
  PartDpic1:string;  PartDpic2:string;  PartDpic3:string;  PartDpic4:string;
  PartEpic1:string;  PartEpic2:string;  PartEpic3:string;  PartEpic4:string;
  PartApic1Style:string;  PartApic2Style:string;  PartApic3Style:string;  PartApic4Style:string;
  PartBpic1Style:string;  PartBpic2Style:string;  PartBpic3Style:string;  PartBpic4Style:string;
  PartCpic1Style:string;  PartCpic2Style:string;  PartCpic3Style:string;  PartCpic4Style:string;
  PartDpic1Style:string;  PartDpic2Style:string;  PartDpic3Style:string;  PartDpic4Style:string;
  PartEpic1Style:string;  PartEpic2Style:string;  PartEpic3Style:string;  PartEpic4Style:string;
  partA:any;  partB:string;  partC:any;  partD:any; partE:any;  Sdate:any;  Edate:any;  Status:any;
  PartAPicsContainer:string="+";  PartAPicsDiv:string="none";
  PartBPicsContainer:string="+";  PartBPicsDiv:string="none";
  PartCPicsContainer:string="+";  PartCPicsDiv:string="none";
  PartDPicsContainer:string="+";  PartDPicsDiv:string="none";
  PartEPicsContainer:string="+";  PartEPicsDiv:string="none";
  //*Options Variables
  frame1html:string=`<div _ngcontent-c1="" class="frame1"><div _ngcontent-c1="" class="rowindex"><div _ngcontent-c1="" style="flex: 100%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div><div _ngcontent-c1="" class="rowindex"><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img1"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img1"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div></div>`;
  frame2html:string=`<div _ngcontent-c1="" class="frame2"><div _ngcontent-c1="" class="rowindex"><div _ngcontent-c1="" class="column" style="flex: 50%;"><div _ngcontent-c1="" class="img3"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div><div _ngcontent-c1="" class="column" style="flex: 50%;"><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div></div></div>`;
  frame3html:string=`<div _ngcontent-c1="" class="frame3"><div _ngcontent-c1="" class="rowindex"><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img1"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img1"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div><div _ngcontent-c1="" class="rowindex"><div _ngcontent-c1="" style="flex: 100%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div></div>`;
  frame4html:string=`<div _ngcontent-c1="" class="frame4"><div _ngcontent-c1="" class="rowindex"><div _ngcontent-c1="" class="column" style="flex: 50%;"><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div><div _ngcontent-c1="" class="column" style="flex: 50%;"><div _ngcontent-c1="" class="img3"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div></div>`;
  frame5html:string=`<div _ngcontent-c1="" class="frame5"><div _ngcontent-c1="" class="rowindex"><div _ngcontent-c1="" style="flex: 100%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div><div _ngcontent-c1="" class="rowindex"><div _ngcontent-c1="" style="flex: 100%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div></div>`;
  frame6html:string=`<div _ngcontent-c1="" class="frame6"><div _ngcontent-c1="" class="rowindex"><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img3"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img3"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div></div>`;
  frame7html:string=`<div _ngcontent-c1="" class="frame7"><div _ngcontent-c1="" class="rowindex"><div _ngcontent-c1="" class="column" style="flex: 50%;"><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div><div _ngcontent-c1="" class="column" style="flex: 50%;"><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div><div _ngcontent-c1="" style="flex: 50%;" class="column"><div _ngcontent-c1="" class="img2"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div></div></div>`;
  frame8html:string=`<div _ngcontent-c1="" class="frame8"><div _ngcontent-c1="" class="rowindex"><div _ngcontent-c1="" style="flex: 100%;" class="column"><div _ngcontent-c1="" class="img3"><div _ngcontent-c1="" class="mydesign" style="height: 100%;background-image: url('https://www.w3schools.com/w3images/nature.jpg');"></div></div></div></div></div>`;


  url:string='http://192.168.0.180/webapi/api/ourvenue'; 

 

  ngOnInit() {
  
  }

}
