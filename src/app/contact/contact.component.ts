import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = {
    company: "浙江瑞宏塑胶有限公司",
    phone: {
      key: "电  话：",
      value: "+86 0576-83882759"
    },
    fax: {
      key: "传  真：",
      value: "+86 0576-83989636"
    }, address: {
      key: "地  址：",
      value: "浙江省台州市天台县福溪街道下王邱村"
    },
    postcode: {
      key: "邮政编码：",
      value: "317200"
    }, email: {
      key: "电子邮箱：",
      value: "f759@263.net, pvb@pvbfilm.com"
    }, homepage: {
      key: "公司主页：",
      value: "http://www.pvbfilm.com"
    }, map: {
      key: "地  图：",
      value: "http://www.pvbfilm.com"
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
