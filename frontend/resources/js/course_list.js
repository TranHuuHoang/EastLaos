// json path
// zip arrays
var json_string = String.raw `{
  "code": [
    "COR2202",
    "COR2203",
    "COR2205",
    "COR2208",
    "COR2209",
    "COR2210",
    "COR2601",
    "COR2603",
    "COR2611",
    "COR2615",
    "COR3001",
    "COR-LAW2610",
    "COR2100",
    "ECON101",
    "ECON102",
    "ECON107",
    "ECON111",
    "ECON203",
    "ECON205",
    "ECON145",
    "ECON155",
    "ECON204",
    "ECON206",
    "ECON208",
    "ECON209",
    "ECON211",
    "ECON212",
    "ECON215",
    "ECON216",
    "ECON217",
    "ECON218",
    "ECON225",
    "ECON233",
    "ECON240",
    "ECON241",
    "ECON242",
    "ECON315",
    "ECON234",
    "ECON235",
    "ECON207",
    "ECON236",
    "ECON237",
    "DSA201",
    "DSA211",
    "DSA212"
  ],
  "name": [
    "Science, Environment and Empire",
    "Climate Change: Global and Local Solutions",
    "Climate, History and Society",
    "Technological Solutions to Urban Challenges",
    "Can Machines Think? AI in History, Philosophy, and Fiction",
    "Technological Innovations Enhancing Urban Sustainability",
    "Urban Cultures",
    "Singapore: Imagining the Next Fifty Years",
    "Cultural History of Cold War",
    "Finding Home in a Globalised World",
    "Big Questions (Happiness and Suffering)",
    "Constitutions, Cultures, and Context",
    "Development Economics",
    "Statistical Inference for Data Science",
    "Statistical Learning with R",
    "Data Science with R",
    "International Trade",
    "International Macroeconomics",
    "Intermediate Econometrics",
    "Advanced Microeconomics",
    "Advanced Macroeconomics",
    "Health Systems and Policy",
    "Economic Forecasting",
    "Family & Society: Econ Theories & Prac",
    "Strategic Thinking",
    "Political Economy Analysis of Institutions",
    "Economic Dynamics",
    "Public Sector Economics",
    "Real Estate Economics",
    "Health Economics",
    "Economics of Ageing",
    "Macroeconomics of Income Distribution",
    "Empirical Industrial Economics",
    "Intermediate Mathematics for Economics",
    "Introductory Data Analytics in Healthcare",
    "Healthcare Management",
    "Game Theory",
    "Industrial Organisation",
    "Labour Economics",
    "Intermediate Microeconomics",
    "Intermediate Macroeconomics",
    "Introduction to Econometrics",
    "Microeconomics 1",
    "International Economics B",
    "Economics and Society"
  ],
  "description": [
    "Finished her are its honoured drawings nor",
    "Pretty see mutual thrown all not edward ten",
    "Particular an boisterous up he reasonably frequently",
    "Several any had enjoyed shewing studied two",
    "Up intention remainder sportsmen behaviour ye happiness",
    "Few again any alone style added abode ask",
    "Nay projecting unpleasing boisterous eat discovered solicitude",
    "Own six moments produce elderly pasture far arrival",
    "Hold our year they ten upon",
    "Gentleman contained so intention sweetness in on resolving",
    "At ourselves direction believing do he departure",
    "Celebrated her had sentiments understood are projection set",
    "Possession ye no mr unaffected remarkably at",
    "Wrote house in never fruit up",
    "Pasture imagine my garrets an he",
    "However distant she request behaved see nothing",
    "Talking settled at pleased an of me brother weather",
    "Good draw knew bred ham busy his hour",
    "Ask agreed answer rather joy nature admire wisdom",
    "Moonlight age depending bed led therefore sometimes preserved exquisite she",
    "An fail up so shot leaf wise in",
    "Minuter highest his arrived for put and",
    "Hopes lived by rooms oh in no death house",
    "Contented direction september but end led excellent ourselves may",
    "Ferrars few arrival his offered not charmed you",
    "Offered anxious respect or he",
    "On three thing chief years in money arise of",
    "Greatly cottage thought fortune no mention he",
    "Of mr certainty arranging am smallness by conveying",
    "Him plate you allow built grave",
    "Sigh sang nay sex high yet door game",
    "She dissimilar was favourable unreserved nay expression contrasted saw",
    "Past her find she like bore pain open",
    "Shy lose need eyes son not shot",
    "Jennings removing are his eat dashwood",
    "Middleton as pretended listening he smallness perceived",
    "Now his but two green spoil drift",
    "Procuring education on consulted assurance in do",
    "Is sympathize he expression mr no travelling",
    "Preference he he at travelling in resolution",
    "So striking at of to welcomed resolved",
    "Northward by described up household therefore attention",
    "Excellence decisively nay man yet impression for contrasted remarkably",
    "There spoke happy for you are out",
    "Fertile how old address did showing because sitting replied six"
  ]
}`;

var course_list = JSON.parse(json_string);

course_code = course_list["code"];
course_name = course_list["name"];
course_description = course_list["description"];

var datazip = course_code.map(function(ele, i) {
  return [i, ele, course_name[i], course_description[i]];
});

// Create table
$(document).ready(function() {
  var table = $('#course_table').DataTable({
    data: datazip,
    columns: [{
        "title": "ID"
      },
      {
        "title": "Course Name"
      },
      {
        "title": "Course Name"
      },
      {
        "title": "Course Information"
      },
      {
        "title": "Subscribe"
      },
    ],
    "columnDefs": [{
      "targets": -1,
      "data": null,
      "width": "12%",
      "render": function(data, type, row) {
        return `
              <button type="button" id="subscribeButton${row[0]}" class="btn btn-success btn-block" data-toggle="modal" data-target="#subscribeModal${row[0]}">
                Subscribe
              </button>

              <div class="modal fade" id="subscribeModal${row[0]}" tabindex="-1" role="dialog" aria-labelledby="subscribeModalLabel${row[0]}" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="subscribeModalLabel${row[0]}">Confirmation</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="cancel">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p><b>Course code:</b> ${row[1]}</p>
                      <p><b>Course name:</b> ${row[2]}</p>
                      <p><b>Course information:</b> ${row[3]}</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn btn-primary subscribeConfirm" data-dismiss="modal">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            `
      }
    }, {
      "targets": 0,
      "visible": false,
      "searchable": false
    }]
  });

  $(".subscribeConfirm").on("click", function() {
    var rowID = table.row($(this).parents('tr')).data()[0];
    var subscribeButton = $(`#subscribeButton${rowID}`)
    subscribeButton.prop("disabled", true);
    subscribeButton.html("Subscribed");
    subscribeButton.removeClass("btn-success");
    subscribeButton.addClass("btn-light");
  });
});