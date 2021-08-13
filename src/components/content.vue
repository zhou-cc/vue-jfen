<template>
  <div class="content">
    <!-- 蓝 -->
    <div class="table table_1">
      <!-- 蓝 - 表头Title部分 -->
      <div class="tableTit">
        <div class="tableTit_hd"></div>
        <div class="tableTitCon right">收入</div>
        <div class="tableTitCon right">完成率</div>
        <div class="tableTitCon right">增幅</div>
      </div>

      <!-- 蓝 - 表内容 -->
      <ul class="tableCon">
        <!-- 第一行 -->
        <li>
          <div class="tableCon_hd">通服收入</div>
          <div class="tableCon-bd income right">203.1亿</div>
          <div class="tableCon-bd finish right">-</div>
          <div class="tableCon-bd add right">
            <div class="img_rate">
              <img src="@/assets/img/increase.svg" alt="#" />
            </div>
            <div class="rate">13.4%</div>
          </div>
        </li>
        <!-- 第二行 -->
        <li>
          <div class="tableCon_hd">H增收</div>
          <div class="tableCon-bd income right">3.8亿</div>
          <div class="tableCon-bd add right">38.1%</div>
          <div class="tableCon-bd finish right">
            <div class="img_rate"></div>
            <div class="rate">-</div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 红 -->
    <div class="table table_1">
      <!-- 红 - 表头Title部分 -->
      <div class="tableTit tit_c">
        <div class="tableTit_hd">C市场</div>
        <div class="tableTitCon right">净增</div>
        <div class="tableTitCon right">保有率</div>
        <div class="tableTitCon right">同比</div>
      </div>

      <!-- 红 - 表内容 -->
      <ul class="tableCon">
        <!-- 红 - 第一行 -->
        <li>
          <div class="tableCon_hd">5G套包客户</div>
          <div class="tableCon-bd income right">88.1万</div>
          <div class="tableCon-bd finish right">-</div>
          <div class="tableCon-bd add right">
            <div class="img_rate"></div>
            <div class="rate">-</div>
          </div>
        </li>
        <!-- 红 - 第二行 -->
        <li>
          <div class="tableCon_hd">5G登网</div>
          <div class="tableCon-bd income right">68.4万</div>
          <div class="tableCon-bd finish right">-</div>
          <div class="tableCon-bd add right">
            <div class="img_rate"></div>
            <div class="rate">-</div>
          </div>
        </li>
        <li>
          <div class="tableCon_hd">价值客户</div>
          <div class="tableCon-bd income right">-</div>
          <div class="tableCon-bd finish right">97.1%</div>
          <div class="tableCon-bd add right">
            <div class="img_rate">
              <img src="@/assets/img/increase.svg" alt="#" />
            </div>
            <div class="rate">13.4%</div>
          </div>
        </li>
        <li>
          <div class="tableCon_hd">价值客户收入</div>
          <div class="tableCon-bd income right">-</div>
          <div class="tableCon-bd finish right">100.2%</div>
          <div class="tableCon-bd add right">
            <div class="img_rate">
              <img src="@/assets/img/increase.svg" alt="#" />
            </div>
            <div class="rate">13.4%</div>
          </div>
        </li>
        <li>
          <div class="tableCon_hd">集团成员价值客户</div>
          <div class="tableCon-bd income right">-</div>
          <div class="tableCon-bd finish right">98.8%</div>
          <div class="tableCon-bd add right">
            <div class="img_rate">
              <img src="@/assets/img/reduce.svg" alt="#" />
            </div>
            <div class="rate">13.4%</div>
          </div>
        </li>
        <li>
          <div class="tableCon_hd">集团成员价值客户收入</div>
          <div class="tableCon-bd income right">-</div>
          <div class="tableCon-bd finish right">102.0%</div>
          <div class="tableCon-bd add right">
            <div class="img_rate">
              <img src="@/assets/img/increase.svg" alt="#" />
            </div>
            <div class="rate">13.4%</div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 绿 -->
    <div class="table table_1">
      <div class="tableTit tit_h">
        <div class="tableTit_hd">H市场</div>
        <div class="tableTitCon right">年净增</div>
        <div class="tableTitCon right">月净增</div>
        <div class="tableTitCon right">完成率</div>
      </div>

      <ul class="tableCon">
        <li>
          <div class="tableCon_hd">家庭宽带</div>
          <div class="tableCon-bd income right">31万</div>
          <div class="tableCon-bd finish right">-</div>
          <div class="tableCon-bd add right">34.5%</div>
        </li>
        <li>
          <div class="tableCon_hd">宽带电视</div>
          <div class="tableCon-bd income right">31万</div>
          <div class="tableCon-bd finish right">-</div>
          <div class="tableCon-bd add right">34.5%</div>
        </li>
        <li>
          <div class="tableCon_hd">移动看家</div>
          <div class="tableCon-bd income right">31万</div>
          <div class="tableCon-bd finish right">-</div>
          <div class="tableCon-bd add right">34.5%</div>
        </li>
        <li>
          <div class="tableCon_hd">家庭组网</div>
          <div class="tableCon-bd income right">31万</div>
          <div class="tableCon-bd finish right">-</div>
          <div class="tableCon-bd add right">34.5%</div>
        </li>
        <li>
          <div class="tableCon_hd">大屏增值付费</div>
          <div class="tableCon-bd income right">31万</div>
          <div class="tableCon-bd finish right">-</div>
          <div class="tableCon-bd add right">34.5%</div>
        </li>
      </ul>
    </div>

    <!-- 黄 -->
    <div class="table table_1">
      <div class="tableTit tit_n">
        <div class="tableTit_hd">N市场</div>
        <div class="tableTitCon right">月净增</div>
        <div class="tableTit_hd right">渗透率</div>
        <div class="tableTitCon right">完成率</div>
      </div>

      <ul class="tableCon">
        <li>
          <div class="tableCon_hd tableCon_hd_n">视频彩铃</div>
          <div class="tableCon-bd income right">106.9万</div>
          <div class="tableCon-bd add right"> 14.8% </div>
          <div class="tableCon-bd finish right"> - </div>
        </li>
        <li>
          <div class="tableCon_hd tableCon_hd_n">和彩云</div>
          <div class="tableCon-bd income right">106.9万</div>
          <div class="tableCon-bd add right"> 14.8% </div>
          <div class="tableCon-bd finish right">-</div>
        </li>
        <li>
          <div class="tableCon_hd tableCon_hd_n">权益</div>
          <div class="tableCon-bd income right">106.9万</div>
          <div class="tableCon-bd finish right"> - </div>
          <div class="tableCon-bd add right"> 14.8% </div>
        </li>
        <li>
          <div class="tableCon_hd tableCon_hd_n">超级SIM卡</div>
          <div class="tableCon-bd income right">106.9万</div>
          <div class="tableCon-bd finish right"> - </div>
          <div class="tableCon-bd add right"> 14.8% </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
.tableTit {
  display: flex;
  line-height: 40px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ffffff;
  background: #639bff;
  padding: 0 5px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tableTit_hd,
.tableCon_hd {
  flex: 1;
}
.tableTitCon,
.tableCon-bd,
.tableTit_hd_n,
.tableCon_hd_n {
  flex: 1;
  padding-right: 10px;
  box-sizing: border-box;
}
.right {
  text-align: right;
}
.center{
    text-align: center;
}
.tableCon_hd {
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 30px;
  color: #797fa4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tableCon-bd {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 3px;
}
.tableCon {
  padding: 0 5px;
}
.tableCon li {
  display: flex;
  border-bottom: 1px solid #dedede;
}
.tableCon li:last-child {
  border: none;
}
.income {
  font-size: 10px;
  font-family: PingFang SC;
  font-weight: 800;
  line-height: 30px;
  color: #212c68;
  opacity: 1;
}
.finish {
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 800;
  line-height: 30px;
  color: #212c68;
}
.add {
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 30px;
  color: #fc4957;
}
.rate {
  float: right;
  margin-right: 1px;
}
.img_rate {
  float: right;
  width: 12px;
  height: 9px;
}
.tit_c {
  background: #ff7f5b;
}
.tit_h {
  background: #00bb8f;
}
.tit_n {
  background: #ffbb56;
}
</style>