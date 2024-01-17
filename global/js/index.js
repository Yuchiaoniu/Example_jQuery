
$(document).ready
    (
        
        
        function () {

            

              $('#accordion').accordion({
                active: false,
                collapsible: true,
                heightStyle: "content",
                animate: { duration: 1000 }
              });

              if($('.show-container').length > 0){
                $('.show-container')
                .css("visibility", "visible")
                .hide()
                .fadeIn(200)
                .fadeOut(200, function(){$('#accordion, .nav')
                .css("visibility", "visible")
                .hide()
                .fadeIn(200);});

                }
              else{
                $('#accordion').css("visibility", "visible").hide().fadeIn(200)
              ;}
              
            $('a').css("color", "blue");
            //先將目標使用visibility隱藏起來，以避免載入前穿幫。載入的時候將hidden拿掉，然後在使用hide和fadein做搭配產生漸入漸出的效果
            //end accordion

            

      //先點擊，然後更改網址，但不重新整理，網友直接輸入網址的時候也可以直接進入到該頁面，並且展開對應的h3

      //當你詢問如何在輸入特定網址的時候出現該網頁並且打開特定的h3

            // 當點擊標題時，更改網址並展開對應內容
            $("h3").click(function(event) {
            event.preventDefault(); // 阻止默認的點擊行為
    
            var newUrl = $(this).data("url");
            if (newUrl) {
                history.pushState(null, "", newUrl); // 更改URL但不重新整理頁面
            }
            });

            var currentUrl = window.location.href;
            $("#urlInput").val(currentUrl);

            //讓相對應的data-url變成active的狀態
            
                var urlParams = new URLSearchParams(window.location.search);
                var h3Id = urlParams.get("h3"); // 取得 h3 參數的值
                if (h3Id) {
                  var h3Index = $("#accordion h3").filter("[id='" + h3Id + "']").index() / 2; // 取得對應 h3 元素在 accordion 中的索引位置
                  
                  if(h3Id==0){$("#accordion").accordion({ active: false });}
                  // 先將 accordion 折疊起來
                  
                  
                  // 初始化 accordion 並設置 active 屬性
                  $("#accordion").accordion({ active: h3Index });
                }  
              

            //登入表單設定
            // dialog function
            $('.dialog').dialog({
                maxWidth: 500,
                maxHeight: 400,
                show: { effect: 'fadeIn', duration: 1500 },
                hide: { effect: 'fadeOut', duration: 1500 },
                modal: true,
                autoOpen: false
                // 能不能用replacewith去把有使用這個class的div裡面的內容更換套用進去?
            });
            // end dialog

            $('#login_img').click(
                function (evt) {
                    evt.preventDefault();
                    $('.dialog').dialog('open');
                }
            );//end click
            

            


            //category============================================================================================
            //category============================================================================================
            //賦予首頁標籤功能
            $('.category_adding').click(
                function () {
                    var $this = $(this);
                    var new_text = $this.text();
                    var new_id = $this.attr("id");
                    var topic = {
                        "name": new_text
                    };
                    //先暫時用這種方式判斷id，然後撰寫內容，之後再按照分類把內容隔開
                    //if (topic.name == "西班牙文") { topic.name = 'spanish' };
                    //先暫時用這種方式判斷id，然後撰寫內容，之後再按照分類把內容隔開
                    if (new_id == "chinese") {
                        var new_content =
                            '<p class="new_content">'
                            + '漢語又稱華語、唐話，概指由上古漢語（先秦雅言）發展而來'
                            + '、書面使用漢字的分析語，為漢藏語系最大的一支語族。如把整個漢語族視為單一語言'
                            + '，則漢語為世界使用人數最多的語言，目前全世界有五分之一人口將漢語做為母語或第二語言'
                            + '除了中國本身，亦有新加坡、韓國、日本等國家作為標準語言來使用'
                            + '學習時可以從<a class="branch_adding" id="chinese_grammar">中文文法</a>開始'
                            + '</p>'
                        var new_image = '<img src="../global/img/chinese.png">'

                    }
                    else if (new_id == "spanish") {
                        var new_content =
                            '<p class="new_content">'
                            + '西班牙語（Español），也稱卡斯提亞語（Castellano）按照第一語言使用者數量排名，為全世界第二位，僅次於漢語。'
                            + '為羅曼語族的分支，除了西班牙本身，亦有墨西哥、烏拉圭和巴拉圭等國家使用'
                            + '，主要採用的是主謂賓結構'
                            + '學習時可以從<a class="branch_adding" id="spanish_grammar">西班牙語文法</a>開始'
                            + '</p>'
                        var new_image = '<img src="../global/img/spanish.jpg">'
                    }
                    else if (new_id == "english") {
                        var new_content =
                            '<p class="new_content">'
                            + '英語（英語：English）直譯為「英吉利語」、「英格蘭語」或「英倫語」，'
                            + '是發展於西歐英格蘭地區的一支西日耳曼語言，是世界歷史上目前唯一具有全球通用語和世界語言地位的語言'
                            + '，也是多數國家和國際組織的官方語言。英語是全球使用最廣泛的日耳曼語（至少70%的日耳曼語使用者是在說英語）'
                            + '，也是使用範圍最廣的印歐語言。'
                            + '學習時可以從<a class="branch_adding" id="english_grammar">英語語文法</a>開始'
                            + '</p>'
                        var new_image = '<img src="../global/img/english.jpg">'
                    }
                    else if (new_id == "math") {
                        var new_content =
                            '<p class="new_content">'
                            + '<a class="branch_adding" id="math_fifth_grade">五年級</a><br>'
                            + '<a class="branch_adding" id="math_sixth_grade">六年級</a><br>'
                            + '<a class="branch_adding" id="math_seventh_grade">七年級</a><br>'
                            + '<a class="branch_adding" id="math_eighth_grade">八年級</a><br>'
                            + '<a class="branch_adding" id="math_ninth_grade">九年級</a><br>'
                            + '<a class="branch_adding" id="math_tenth_grade">十年級</a><br>'
                            + '<a class="branch_adding" id="math_eleventh_grade">十一年級</a><br>'
                            + '<a class="branch_adding" id="math_twelfth_grade">十二年級</a><br>'
                            + '</p>'
                        var new_image = '<img src="../global/img/english.jpg">'
                    }



                    else {
                        new_content = ""
                        new_image = ""
                    };


                    //現在內容已經轉變成id了
                    //那我們應該要怎麼對指定的id掛上寫好的內容?
                    //樣式上不去，只能使用inline css


                    // var new_div =
                    //     "<h3 class='new_item topic_removing1' style='display:none'>Q4 New Question  <button type='button' class='topic_removing float_right'>X</button></h3><div class='topic_removing2'>New Content</div>";
                    var new_topic =
                        "<h3 class='"
                        + "new_item "
                        + " topic_removing1'"
                        + "style='display:none'>"
                        + new_text
                        + "<button type='button'"
                        + "class='"
                        + "topic_removing"
                        + " float_right'>"
                        + "X</button> "
                        + "</h3>"
                        + "<div class='"
                        + new_id
                        + " topic_removing2"
                        + "'>"
                        + new_content
                        + new_image
                        + "</div>"

                    $this.closest('div').prev('h3').click();
                    $this.closest('div')
                        .delay(200)
                        //等待首頁標籤收合，並且附上下一個標題以及重新整理
                        .queue(function (next) {
                            $(this).after(new_topic);
                            // $('.chinese').text("aaa");
                            //我要怎麼在這個地方掛上另外一個檔案的內容?先寫吧

                            $('#accordion').accordion("refresh");

                            $('.new_item').show(800);
                            next();

                        })
                        //等待新的分支出現以後，賦予分支標籤功能
                        .queue(function (next) {
                            //因為掛上這個程式的時間差，所以需要將此程式寫在這裡，而不能寫在外面
                            //在click叉叉之後，會先隱藏this的子div和標題，將其隱藏後，在將其移除


                            //這樣的話點擊出新的元件以後，topic_adding就會有重複點擊的情況

                            //branch==================================================================================================================================
                            //branch==================================================================================================================================
                            $('.branch_adding').click(

                                function () {

                                    var $this = $(this);
                                    var new_text = $this.text();
                                    var new_id = $this.attr("id");
                                    var topic = {
                                        "name": new_text
                                    };

                                    if (new_id == "chinese_grammar") {
                                        var new_content =
                                            '<p class="new_content">'
                                            + '現代漢語文法最大的特點是沒有嚴格意義的形態變化。'
                                            + '名詞沒有格的變化，也沒有性和數（少部份指人的詞可能以「們」來指示其眾數形）的區別。'
                                            + '動詞不分人稱，也沒有時態；另漢語常常可將多個動詞給置於同一個句子中，此即連動結構。'
                                            + '這一不同於歐洲語言的特點，使得在歷史上很長一段時間內'
                                            + '，漢語被很多語言學家認為沒有文法也沒有詞類'
                                            + '，20世紀著名歷史學家威爾·杜蘭特在《文明的故事》第一卷《東方的遺產》一書中仍然認為漢語沒有文法和詞類。'
                                            + '但是對使用者來說，中文絕對也是使用著<a class="topic_adding" id="chinese_noun">名詞</a>'
                                            + '、<a class="topic_adding" id="chinese_verb">動詞</a>'
                                            + '、<a class="topic_adding" id="chinese_adjective">形容詞</a>'
                                            + '、<a class="topic_adding" id="chinese_adverb">副詞</a>。'
                                            + '<a class="topic_adding" id="chinese_sentence">子句結構</a>以及'
                                            + '<a class="topic_adding" id="chinese_subject_verb_object">主謂賓結構</a>'
                                            + '和<a class="topic_adding" id="chinese_rhetoric">修辭法</a>來讓詞句更加得生動'
                                            + '</p>'

                                        var new_image = '<img src="../global/img/chinese_grammar.jpg">';

                                    }
                                    else if (new_id == "spanish_grammar") {
                                        var new_content =
                                            '<p class="new_content">'
                                            + '西班牙語的文法主要由<a class="topic_adding" id="spanish_subject_verb_object">主謂賓結構</a>'
                                            + '組成，不論是<a class="topic_adding" id="spanish_noun">名詞</a>'
                                            + '、<a class="topic_adding" id="spanish_verb">動詞</a>'
                                            + '、<a class="topic_adding" id="spanish_adjective">形容詞</a>'
                                            + '、<a class="topic_adding" id="spanish_adverb">副詞</a>，以及'
                                            + '<a class="topic_adding" id="spanish_sentence">各式各樣的子句</a>'
                                            + '，其特色使得單詞有著詞性的<a class="topic_adding" id="spanish_grammatical_gender">陽陰性</a>與'
                                            + '<a class="topic_adding" id="spanish_grammatical_number">數量性</a>的變化'
                                            + '相對其他語言來說，西班牙語是一種屈折語，依靠詞形變化表明語素的聯繫，名詞分為陰性和陽性'
                                            + '，每個動詞有約五十種變位形式，有人稱和單複數的區別'
                                            + '，並依時態、語氣、體和語態而變。且形容詞和限定詞隨名詞的性、數變化而變。'
                                            + '亦有<a class="topic_adding" id="spanish_rhetoric">修辭法</a>來修是詞句。'
                                            + '但與古典拉丁語和俄語這樣的強屈折語相比，西班牙語沒有名詞變格，且更多地藉助前置詞來建立受詞與句子中其他部分的聯繫。'
                                            + '西班牙語傾向於將修飾語置於中心語之後，但如需表達特定語義，形容詞也會位於其所修飾的名詞之前。'
                                            + '如同其它羅曼語，基本語序為主謂賓結構，但常常不限於此。'
                                            + '西班牙語的主語可以省略，因為人稱可以由動詞變位體現，只要不引起歧義且不強調主語，表明主語就是沒有必要的。'
                                            + '西班牙語還是一種動詞框架語言，以動詞來表明路徑，而不是像日耳曼語言那樣用小品詞或詞綴。'
                                            + '例如西班牙語的「subir corriendo」（向上跑）和「salir volando」（飛出），譯為英語就是「to run up」和「to fly out」。'
                                            + '</p>'
                                        var new_image = '<img src="../global/img/spanish_grammar.jpg">'
                                    }
                                    else if (new_id == "english_grammar") {
                                        var new_content =
                                            '<p class="new_content">'
                                            + '英語的文法主要由<a class="topic_adding" id="english_subject_verb_object">主謂賓結構</a>'
                                            + '組成，不論是<a class="topic_adding" id="english_noun">名詞</a>'
                                            + '、<a class="topic_adding" id="english_verb">動詞</a>'
                                            + '、<a class="topic_adding" id="english_adjective">形容詞</a>'
                                            + '、<a class="topic_adding" id="english_adverb">副詞</a>，以及'
                                            + '<a class="topic_adding" id="english_sentence">各式各樣的子句</a>'
                                            + '，其特色使得單詞有著詞性的<a class="topic_adding" id="english_grammatical_gender">陽陰性</a>與'
                                            + '<a class="topic_adding" id="english_grammatical_number">數量性</a>的變化'
                                            + '相對其他語言來說，西班牙語是一種屈折語，依靠詞形變化表明語素的聯繫，名詞分為陰性和陽性'
                                            + '，每個動詞有約五十種變位形式，有人稱和單複數的區別'
                                            + '，並依時態、語氣、體和語態而變。且形容詞和限定詞隨名詞的性、數變化而變。'
                                            + '亦有<a class="topic_adding" id="english_rhetoric">修辭法</a>來修是詞句。'
                                            + '但與古典拉丁語和俄語這樣的強屈折語相比，西班牙語沒有名詞變格，且更多地藉助前置詞來建立受詞與句子中其他部分的聯繫。'
                                            + '西班牙語傾向於將修飾語置於中心語之後，但如需表達特定語義，形容詞也會位於其所修飾的名詞之前。'
                                            + '如同其它羅曼語，基本語序為主謂賓結構，但常常不限於此。'
                                            + '西班牙語的主語可以省略，因為人稱可以由動詞變位體現，只要不引起歧義且不強調主語，表明主語就是沒有必要的。'
                                            + '西班牙語還是一種動詞框架語言，以動詞來表明路徑，而不是像日耳曼語言那樣用小品詞或詞綴。'
                                            + '例如西班牙語的「subir corriendo」（向上跑）和「salir volando」（飛出），譯為英語就是「to run up」和「to fly out」。'
                                            + '</p>'
                                        var new_image = '<img src="../global/img/english_grammar.jpg">'
                                    }



                                    //math
                                    else if (new_id == "math_fifth_grade") {
                                        var new_content =
                                            '<h3>五年級上學期</h3>'
                                            + '<p class="new_content">'
                                            + '<a class="topic_adding" id="decimal_operation">小數運算</a><br>'
                                            + '<a class="topic_adding" id="factor_and_common_factor">因數、公因數</a><br>'
                                            + '<a class="topic_adding" id="multiple_and_common_multiple">倍數、公倍數</a><br>'
                                            + '<a class="topic_adding" id="flat_graphics">平面圖形</a><br>'
                                            + '<a class="topic_adding" id="muti_multiplication_division">多位數乘除</a><br>'
                                            + '<a class="topic_adding" id="expand_reduction_pass">擴分、約分、通分</a><br>'
                                            + '<a class="topic_adding" id="addition_and_subtraction_of_different_denominators">異分母分數加減</a><br>'
                                            + '<a class="topic_adding" id="arithmetic">四則運算</a><br>'
                                            + '<a class="topic_adding" id="area">面積</a><br>'
                                            + '<a class="topic_adding" id="line_symmetry">線對稱圖形</a><br>'
                                            + '</p>'
                                            + '<hr>'
                                            + '<h3>五年級下學期</h3>'
                                            + '<p class="new_content">'
                                            + '<a class="topic_adding" id="decimal_operation">分數</a><br>'
                                            + '<a class="topic_adding" id="area_of_cuboid_cube">長方體和正方體的面積</a><br>'
                                            + '<a class="topic_adding" id="volume">容積</a><br>'
                                            + '<a class="topic_adding" id="calculation_of_time">時間的計算</a><br>'
                                            + '<a class="topic_adding" id="volume_of_irregular_objects">不規則物體的體積</a><br>'
                                            + '<a class="topic_adding" id="multiplication_of_time">時間的乘法</a><br>'
                                            + '<a class="topic_adding" id="basic_algebra">符號代表數</a><br>'
                                            + '<a class="topic_adding" id="huge_unit_in_life">生活中的大單位</a><br>'
                                            + '<a class="topic_adding" id="retio_and_percentage">比率與百分率</a><br>'
                                            + '<a class="topic_adding" id="three_dimensional_body">立體形體</a><br>'
                                            + '</p>'
                                        var new_image = '<img src="">'
                                    }
                                    else if (new_id == "math_sixth_grade") {
                                        var new_content =
                                            '<h3>六年級上學期</h3>'
                                            + '<p class="new_content">'
                                            + '<a class="topic_adding" id="greatest_common_factor_and_least_common_multiple">最大公因數與最小公倍數</a><br>'
                                            + '<a class="topic_adding" id="division_of_fractions">分數的除法</a><br>'
                                            + '<a class="topic_adding" id="Bar_and_Line_Charts">長條圖與折線圖</a><br>'
                                            + '<a class="topic_adding" id="division_of_decimals">小數的除法</a><br>'
                                            + '<a class="topic_adding" id="circumference_and_sector_arc_length">圓周長與扇形弧長</a><br>'
                                            + '<a class="topic_adding" id="ratio_and_positive_ratio">比、比值與正比</a><br>'
                                            + '<a class="topic_adding" id="scale_and_zoom">縮放圖與比例尺</a><br>'
                                            + '<a class="topic_adding" id="area_of_​​circle_and_sector">圓與扇形的面積</a><br>'
                                            + '<a class="topic_adding" id="regularity">規律</a><br>'
                                            + '<a class="topic_adding" id="axiom_of_equivalence">等量公理</a><br>'
                                            + '</p>'
                                            + '<hr>'
                                            + '<h3>六年級下學期</h3>'
                                            + '<p class="new_content">'
                                            + '<a class="topic_adding" id="arithmetic_operations_with_decimals_and_fractions">小數與分數的四則運算</a><br>'
                                            + '<a class="topic_adding" id="prism_and_cylinder">角柱與圓柱</a><br>'
                                            + '<a class="topic_adding" id="rate">速率</a><br>'
                                            + '<a class="topic_adding" id="circle_chart">圓形圖</a><br>'
                                            + '<a class="topic_adding" id="comparison_and_baseline_amount">基準量與比較量</a><br>'
                                            + '<a class="topic_adding" id="some_math_common_question">基本數學問題</a><br>'
                                            + '</p>'
                                        var new_image = '<img src="">'
                                    }



                                    else {
                                        new_content = ""
                                        new_image = ""
                                    };


                                    //現在內容已經轉變成id了
                                    //那我們應該要怎麼對指定的id掛上寫好的內容?
                                    //樣式上不去，只能使用inline css


                                    // var new_div =
                                    //     "<h3 class='new_item topic_removing1' style='display:none'>Q4 New Question  <button type='button' class='topic_removing float_right'>X</button></h3><div class='topic_removing2'>New Content</div>";
                                    var new_topic =
                                        "<h3 class='"
                                        + "new_item "
                                        + " topic_removing1'"
                                        + "style='display:none'>"
                                        + new_text
                                        + "<button type='button'"
                                        + "class='"
                                        + "topic_removing"
                                        + " float_right'>"
                                        + "X</button> "
                                        + "</h3>"
                                        + "<div class='"
                                        + new_id
                                        + " topic_removing2"
                                        + "'>"
                                        + new_content
                                        + new_image
                                        + "</div>"


                                    $this.closest('div').prev('h3').click();
                                    $this.closest('div')
                                        .delay(200)
                                        //等待分支標籤收合，並且附加新的分支主題以及重新整理
                                        .queue(function (next) {
                                            $(this).after(new_topic);
                                            // $('.chinese').text("aaa");
                                            //我要怎麼在這個地方掛上另外一個檔案的內容?先寫吧



                                            $('.new_item').show(800);
                                            $('#accordion').accordion("refresh");
                                            next();

                                        })
                                        //等待新的分支主題出現後掛載移除按鈕的功能
                                        .queue(function (aaa) {
                                            //因為掛上這個程式的時間差，所以需要將此程式寫在這裡，而不能寫在外面
                                            //在click叉叉之後，會先隱藏this的子div和標題，將其隱藏後，在將其移除

                                            $('.topic_removing').click(


                                                function (event) {
                                                    var $this = $(this);
                                                    if ($('.topic_removing').parent('h3').hasClass('ui-state-active')) {
                                                        // accordion is open
                                                    }
                                                    else {
                                                        event.stopPropagation();

                                                    }

                                                    $this.next('div').fadeOut(1800);
                                                    $this.parent().hide(1800)
                                                        //等候標籤隱藏後，刪除實際的標籤
                                                        .queue(function (next) {
                                                            $this.parent().next('div').remove();
                                                            $this.parent().remove();

                                                            next();
                                                        }
                                                        );

                                                }
                                            )
                                            $('.topic_adding').click(
                                                function () {
                                                    var $this = $(this);
                                                    var new_text = $this.text();
                                                    var new_id = $this.attr("id");
                                                    var topic = {
                                                        "name": new_text
                                                    };
                                                    if (new_id == "spanish_noun") {
                                                        var new_content =
                                                            '<p class="new_content">'
                                                            + '西班牙語的文法主要由<a class="topic_adding" id="spanish_subject_verb_object">主謂賓結構</a>'
                                                            + '組成，不論是<a class="topic_adding" id="spanish_noun">名詞</a>'
                                                            + '、<a class="topic_adding" id="spanish_verb">動詞</a>'
                                                            + '、<a class="topic_adding" id="spanish_adjective">形容詞</a>'
                                                            + '、<a class="topic_adding" id="spanish_adverb">副詞</a>，以及'
                                                            + '<a class="topic_adding" id="spanish_sentence">各式各樣的子句</a>'
                                                            + '，其特色使得單詞有著詞性的<a class="topic_adding" id="spanish_grammatical_gender">陽陰性</a>與'
                                                            + '<a class="topic_adding" id="spanish_grammatical_number">數量性</a>的變化'
                                                            + '相對其他語言來說，西班牙語是一種屈折語，依靠詞形變化表明語素的聯繫，名詞分為陰性和陽性，每個動詞有約五十種變位形式，有人稱和單複數的區別，並依時態、語氣、體和語態而變。且形容詞和限定詞隨名詞的性、數變化而變。但與古典拉丁語和俄語這樣的強屈折語相比，西班牙語沒有名詞變格，且更多地藉助前置詞來建立受詞與句子中其他部分的聯繫。西班牙語傾向於將修飾語置於中心語之後，但如需表達特定語義，形容詞也會位於其所修飾的名詞之前。如同其它羅曼語，基本語序為主謂賓結構，但常常不限於此。西班牙語的主語可以省略，因為人稱可以由動詞變位體現，只要不引起歧義且不強調主語，表明主語就是沒有必要的。西班牙語還是一種動詞框架語言，以動詞來表明路徑，而不是像日耳曼語言那樣用小品詞或詞綴。例如西班牙語的「subir corriendo」（向上跑）和「salir volando」（飛出），譯為英語就是「to run up」和「to fly out」。'
                                                            + '</p>'
                                                        var new_image = '<img src="../global/img/Collins_grammar_book.jpg">'
                                                    }


                                                    //math_topic
                                                    else if (new_id == "decimal_operation") {
                                                        var new_content =
                                                            '<p class="new_content">'
                                                            + '西班牙語的文法主要由<a class="topic_adding" id="spanish_subject_verb_object">主謂賓結構</a>'
                                                            + '組成，不論是<a class="topic_adding" id="spanish_noun">名詞</a>'
                                                            + '、<a class="topic_adding" id="spanish_verb">動詞</a>'
                                                            + '、<a class="topic_adding" id="spanish_adjective">形容詞</a>'
                                                            + '、<a class="topic_adding" id="spanish_adverb">副詞</a>，以及'
                                                            + '<a class="topic_adding" id="spanish_sentence">各式各樣的子句</a>'
                                                            + '，其特色使得單詞有著詞性的<a class="topic_adding" id="spanish_grammatical_gender">陽陰性</a>與'
                                                            + '<a class="topic_adding" id="spanish_grammatical_number">數量性</a>的變化'
                                                            + '相對其他語言來說，西班牙語是一種屈折語，依靠詞形變化表明語素的聯繫，名詞分為陰性和陽性，每個動詞有約五十種變位形式，有人稱和單複數的區別，並依時態、語氣、體和語態而變。且形容詞和限定詞隨名詞的性、數變化而變。但與古典拉丁語和俄語這樣的強屈折語相比，西班牙語沒有名詞變格，且更多地藉助前置詞來建立受詞與句子中其他部分的聯繫。西班牙語傾向於將修飾語置於中心語之後，但如需表達特定語義，形容詞也會位於其所修飾的名詞之前。如同其它羅曼語，基本語序為主謂賓結構，但常常不限於此。西班牙語的主語可以省略，因為人稱可以由動詞變位體現，只要不引起歧義且不強調主語，表明主語就是沒有必要的。西班牙語還是一種動詞框架語言，以動詞來表明路徑，而不是像日耳曼語言那樣用小品詞或詞綴。例如西班牙語的「subir corriendo」（向上跑）和「salir volando」（飛出），譯為英語就是「to run up」和「to fly out」。'
                                                            + '</p>'
                                                        var new_image = '<img src="../global/img/Collins_grammar_book.jpg">'
                                                    }




                                                    else {
                                                        new_content = ""
                                                        new_image = ""
                                                    };


                                                    //現在內容已經轉變成id了
                                                    //那我們應該要怎麼對指定的id掛上寫好的內容?
                                                    //樣式上不去，只能使用inline css


                                                    // var new_div =
                                                    //     "<h3 class='new_item topic_removing1' style='display:none'>Q4 New Question  <button type='button' class='topic_removing float_right'>X</button></h3><div class='topic_removing2'>New Content</div>";
                                                    var new_topic =
                                                        "<h3 class='"
                                                        + "new_item "
                                                        + " topic_removing1'"
                                                        + "style='display:none'>"
                                                        + new_text
                                                        + "<button type='button'"
                                                        + "class='"
                                                        + "topic_removing"
                                                        + " float_right'>"
                                                        + "X</button> "
                                                        + "</h3>"
                                                        + "<div class='"
                                                        + new_id
                                                        + " topic_removing2"
                                                        + "'>"
                                                        + new_content
                                                        + new_image
                                                        + "</div>"

                                                    $this.closest('div').prev('h3').click();
                                                    $this.closest('div')
                                                        .delay(200)
                                                        .queue(function (next) {
                                                            $(this).after(new_topic);
                                                            // $('.chinese').text("aaa");
                                                            //我要怎麼在這個地方掛上另外一個檔案的內容?先寫吧


                                                            $('.new_item').show(800);
                                                            $('#accordion').accordion("refresh");
                                                            next();

                                                        })
                                                        .queue(function (aaa) {
                                                            //因為掛上這個程式的時間差，所以需要將此程式寫在這裡，而不能寫在外面
                                                            //在click叉叉之後，會先隱藏this的子div和標題，將其隱藏後，在將其移除

                                                            $('.topic_removing').click(


                                                                function (event) {
                                                                    var $this = $(this);
                                                                    if ($('.topic_removing').parent('h3').hasClass('ui-state-active')) {
                                                                        // accordion is open
                                                                    }
                                                                    else {
                                                                        event.stopPropagation();

                                                                    }

                                                                    $this.next('div').fadeOut(1800);
                                                                    $this.parent().hide(1800)

                                                                        .queue(function (next) {
                                                                            $this.parent().next('div').remove();
                                                                            $this.parent().remove();

                                                                            next();
                                                                        }
                                                                        );

                                                                }
                                                            )

                                                        });


                                                }
                                            );

                                        });
                                }
                            );
                        })



                }
            );



        }//end main function
    );//end document.ready



// 套用class: 在載入之前，把a標籤的文字提取出來，並且使用this把文字塞入class，然後重新整理，接著就可以對該class做拉取資料的動作
// 可是class盡量不要用英文以外的數字，這該怎麼辦
// 用迴圈轉英文就好

// 拉取資料的動作:然後在該this的function底下，對這個class做出append的動作，append寫好的變數，所以我們要將內容寫在變數裡面
// 要怎麼把內容和上面的程式分開?



//細項修改:
//如何修正點叉叉會開合單位的作用
//對function傳入一個參數叫做event，然後event.stopPropagation();
//判斷是否開啟，可以用hasClass()判斷有沒有ui-state-active




