import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.scss"]
})
export class NewsItemComponent implements OnInit {
  item = {
    id: 1,
    url: "http://localhost:4200/#intro",
    title: "pvb的应用有那些？",
    content: `
    PVB胶片应用在哪些领域？ 建筑业和汽车业对新用途玻璃使用的增加，导致需要各种各样的？色，本公司提供大？10种基本？色供您选择，通过基本颜色的？合可以得到无数种？色。彩色薄膜？用宽度950mm以下的小型玻璃，为满足您对特殊颜色的需要，我们会？您提出建议。
    PVB玻璃夹层膜是由聚乙烯醇缩丁醛树脂，经增塑剂DHA塑化挤压而成型的一种高分子材料。PVB玻璃夹层膜厚度一般为0.38mm和0.76mm两种，对无机玻璃具有良好的粘结性，具有透明、耐热、耐寒、耐湿，机械强度高等特性。夹层玻璃可以用来中空玻璃门窗。普通的中空玻璃一般不具备抗撞击性能，而一面为夹层玻璃的中空玻璃则变成了安全玻璃。根据不同的用途，夹层玻璃可以分成平夹层玻璃、弯夹层玻璃、防弹玻璃、防盗夹层玻璃以及装饰夹层玻璃。 PVB薄膜主要用于夹层玻璃，具有安全、保温、控制噪音和隔离紫外线等多项功能，广泛应用于建筑、汽车等行业。
    由于夹层玻璃具有很高抗冲击强度和使用的安全性，因而适用于建筑物的门、窗、天花板、地板和隔墙、工业厂房的天窗、商店的橱窗、幼儿园、学校、体育馆、私人住宅、别墅、疯人院、银行、珠宝店、邮局等保存贵重物品或玻璃易碎的建筑的门窗等。夹层玻璃常常被用于学校、机场、旅馆、部委办公楼等公共设施，易于发生事故的地方（落地窗、玻璃门等）及屋顶天窗等处。
    夹层玻璃广泛应用建筑物的门窗、地板、幕墙、天棚天窗。弯夹层玻璃可用于升降式观光电梯、商场宾馆的旋转门。防弹玻璃和防盗玻璃可用于银行、证券公司、保险公司等金融企业的营业厅以及金银首饰店，博物馆，商级住宅楼，监狱等场所的柜台，门窗。采用特殊配方生产的PVB薄膜在航天、军事和高新技术工业等领域也有着广泛的应用，如用于飞机、航天器、军事仪器、太阳能电池和太阳能接收器，在工业领域应用于复合减震钢板等。
    `,
    author: "admin",
    visited: 8382,
    date: "2013-5-29"
  };

  hash = "#";
  page = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.page = parseInt(param.get("page"), 10);
    });
  }

}
