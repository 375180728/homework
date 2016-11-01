  var num = 0; // 定义第一个输入的数据
  function jsq(num) {
    //获取当前输入
    document.getElementById('screen').value += document.getElementById(num).value;
  }
  function eva() {
    //计算输入结果
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
  }
  function clearNum() {
    //清0
    document.getElementById("screen").value = null;
    document.getElementById("screen").focus();
  }
  function tuiGe() {
    //退格
    var arr = document.getElementById("screen");
    arr.value = arr.value.substring(0, arr.value.length - 1);
  }
  function onLoad(){
    //加载完毕后光标自动对应到输入框
    document.getElementById("screen").focus();
  }