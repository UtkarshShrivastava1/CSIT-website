<?php 
session_start();
include('../includes/config.php');
    ?>

<?php include ('../header.php');?>

<style>
   /* body {
      
  color: #000000;
  font-family: Sans-Serif;
  padding: 30px;
  background-color: #f6f6f6;
}*/

a {
  
  text-decoration: none;
  color: #000000;
}

a:hover {
  color: #222222
}
#nil{
  display: flex;
  align-items: center;
  font-family: verdana;
  border-radius: 5px;

}
/* Dropdown */

.dropdown {
  width: 100%;
  /* display: inline-block; */
  position: relative;
}

.dd-button {
  
 
  display: flex;
  align-items: center;
  /* display: inline-block; */
  border: 1px solid gray;
  border-radius: 4px;
  padding: 10px 30px 10px 20px;
  background-color: #ffffff;
  cursor: pointer;
  white-space: nowrap;
}

.dd-button:after {
  content: '';

  /* position: absolute; */
  
  
 
  /* position: relative; */
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
}

.dd-button:hover {
  background-color: #eeeeee;
}


.dd-input {
  display: none;
}

.dd-menu {
  /* position: absolute; */
  /* position: relative; */
  top: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
  margin: 2px 0 0 0;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
  background-color: #ffffff;
  list-style-type: none;
}

.dd-input + .dd-menu {
  display: none;
} 

.dd-input:checked + .dd-menu {
  display: block;
  width: auto;

} 

.dd-menu li {
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;
}

.dd-menu li:hover {
  background-color: #f6f6f6;
}

.dd-menu li a {
  display: block;
  margin: -10px -20px;
  padding: 10px 20px;
}

.dd-menu li.divider{
  padding: 0;
  border-bottom: 1px solid #cccccc;
}
ul{
 
  justify-content: center;
  width: 95%;

}

  </style>
    <!-- listing start -->
    <div class="container-fluid">
        <div class="row py-3">
            <div class="col-md-2 ">
                 <div class="list-group ">
                  <a href="naac_cycle1.php" class="list-group-item list-group-item-action ">NAAC Cycle1</a>
                  <a href="naac_cycle2_deatils.php" class="list-group-item list-group-item-action active">NAAC Cycle2</a>
                  <a href="aqar.php" class="list-group-item list-group-item-action">AQAR</a>
                  <!-- a href="process.php" class="list-group-item list-group-item-action active">Process</a>
                  <a href="https://forms.gle/UG2EQAtoChbGTX27A" target="_blank" class="list-group-item list-group-item-action">Enquiry Form</a>
                  <a href="helpdesk.php" class="list-group-item list-group-item-action">Help Desk</a> -->
  </div><br>
    </div>
     <div class="col-md-10">
         <div class="card">
          <div class="card-body">
              <div class="row">
                  <div class="col-md-12">
                     <h4>NAAC Cycle2</h4>
              <hr>
             </div>
           </div>
             <div class="row">
             <div class="col-md-12" style="overflow-x:auto;">
            <table class="table table-striped">
     <tbody>
<!-- <tr>
     <td><a href="1.3.1 Institution integrates crosscutting issues relevant.pdf" target="_blank" ><b>CEC SELF-DECLARATION</b></a></td>
    </tr>
      <tr>
       <td><a href="" target="_blank" ><b>CEC UNDERTAKING</b></a></td>
        </tr> -->
                                                      
 <tr>
  <td>
         <label class="dropdown" style=" color: #fff;">

    <div class="dd-button"style="background-color: #7f1d1d; height: 50px;">
 <b><p style="font-family:verdana"style= align="center"><div id= "nil">EXTENDED PROFILE </div></p> </b>
    </div>
  
    <input type="checkbox" class="dd-input" id="test">
  
    <ul class="dd-menu">
       <li><a href="EP 1.1 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended 1.1 - Number of students year wise during the last five years</b></a></li>
	   <!-- <li><a href="EP 1.1 Certificate.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended 1.1 - Certificate pdf</b></a></li> -->
       <!-- <li><a href="EP 1.1 List of Students 2018-19_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended 1.1 - Certificate pdf</b></a></li> -->
       <!-- <li><a href="EP 1.1 List of Students 2019-20_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended 1.1 - Certificate pdf</b></a></li> -->
       <!-- <li><a href="EP 1.1 List of Students 2020-21_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended 1.1 - Certificate pdf</b></a></li> -->
       <!-- <li><a href="EP 1.1 List of Students 2021-22_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended 1.1 - Certificate pdf</b></a></li> -->
       <!-- <li><a href="EP 1.1 List of Students 2022-23_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended 1.1 - Certificate pdf</b></a></li> -->
    <li><a href="EP 2.1 Faculty List without Repeat Count (1).pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended 2.1 - Number of Full time teachers during the last five years</b></a></li>
		<!-- <li><a href="EP 2.1 Faculty List without Repeat Count.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended EP 2.1 Faculty List</b></a></li> -->
    <li><a href="EP 2.2 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended 2.2 - Number of full time teachers year wise during the last five years</b></a></li>
		<!--  <li><a href="EP 2.2 Certificate.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 2.2 Certificate</b></a></li>
    <li><a href="EP 2.2 Faculty List 2018-19_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 2.2 Faculty List 2018-19_signed</b></a></li>
    <li><a href="EP 2.2 Faculty List 2019-20_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 2.2 Faculty List 2019-20_signed</b></a></li>
    <li><a href="EP 2.2 Faculty List 2020-21_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 2.2 Faculty List 2020-21_signed</b></a></li>
    <li><a href="EP 2.2 Faculty List 2021-22_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 2.2 Faculty List 2021-22_signed</b></a></li>
    <li><a href="EP 2.2 Faculty List 2022-23_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 2.2 Faculty List 2022-23_signed</b></a></li> -->
    <li><a href="EP 3.1 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended 3.1 - Expenditure Excluding salary component year wise during the last five years</b></a></li>
		<!-- <li><a href="EP 3.1 Certificate.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 3.1 Certificate</b></a></li>
    <li><a href="EP 3.1 Balance Sheet 2018-19_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 3.1 Balance Sheet 2018-19_signed</b></a></li>
    <li><a href="EP 3.1 Balance Sheet 2019-20_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 3.1 Balance Sheet 2019-20_signed</b></a></li>
    <li><a href="EP 3.1 Balance Sheet 2020-21_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 3.1 Balance Sheet 2020-21_signed</b></a></li>
    <li><a href="EP 3.1 Balance Sheet 2021-22_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 3.1 Balance Sheet 2021-22_signed</b></a></li>
    <li><a href="EP 3.1 Balance Sheet 2022-23_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">EP 3.1 Balance Sheet 2022-23_signed</b></a></li> -->
  
      <li class="divider"></li>
      
    </ul>
    
  </label>
  </tr>
    </td>

      <tr>
  <td>
                 <label class="dropdown" >

    <div class="dd-button">
<b style="font-family: verdana; color: #7f1d1d;">Criteria 1 - Curricular Aspects</b>
    </div>
  
    <input type="checkbox" class="dd-input" id="test">
    <ul class="dd-menu">
      <label class="dropdown"style=" background-color: #000;">
      <div class="dd-button"style = "background-color: #b83e12;color:white;">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">1.1 – Curriculum Design and Developments</b></div>
      <input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
        <li><a href="1.1.1.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;"> 1.1.1 The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment Write description in a maximum of 500 words</b></a></li>
   
      </ul>
    </label>


    <label class="dropdown">
      <div class="dd-button">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">1.2 - Academic Flexibility</b></div>
      <input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">

        <li><a href="1.2.1 Summary.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.1 Number of Add on /Certificate/Value added programs offered during the last five years</b></a></li>
			 <!-- <li><a href="1.2.1 2018-19_signed.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.1 2018-19_signed</b></a></li> -->
        <!-- <li><a href="1.2.1 2019-20_signed.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.1 2019-20_signed</b></a></li> -->
        <!-- <li><a href="1.2.1 2020-21_signed.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.1 2020-21_signed</b></a></li> -->
        <!-- <li><a href="1.2.1 2021-22_signed.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.1 2021-22_signed</b></a></li> -->
        <!-- <li><a href="1.2.1 2022-23_signed.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.1 2022-23_signed</b></a></li> -->
        <!-- <li><a href="1.2.1 certificate of HOI.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.1 Certificate of HOI</b></a></li> -->
        <li><a href="1.2.2 Summary.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.2 Percentage of students enrolled in Certificate/ Add-on/Value added programs as against the total number of students during the last five years</b></a></li>
		  <!-- <li><a href="1.2.2 2018-19_signed.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.2 2018-19_signed</b></a></li> -->
        <!-- <li><a href="1.2.2 2019-20_signed.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.2 2019-20_signed</b></a></li> -->
        <!-- <li><a href="1.2.2 2020-21_signed.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.2 2020-21_signed</b></a></li> -->
        <!-- <li><a href="1.2.2 2021-22_signed.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.2 2021-22_signed</b></a></li> -->
        <!-- <li><a href="1.2.2 2022-23_signed.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.2 2022-23_signed</b></a></li> -->
        <!-- <li><a href="1.2.2 CERTIFICATE.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.2.2 Certificate </b></a></li> -->
   
      </ul>
    </label>


<label class="dropdown">
      <div class="dd-button" style = "background-color: #b83e12;color:white;">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">1.3 – Curriculum Enrichment</b></div>
      <input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
        <li><a href="1.3.1.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.3.1 Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human values, Environment and Sustainability into the Curriculum</b></a></li>
    <li><a href="1.3.2.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.3.2 Percentage of students undertaking project work /field work/ internships (Data for the latest completed academic year)</b></a></li>
      </ul>
    </label>

    <label class="dropdown">
      <div class="dd-button">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">1.4 – Feedback System</b></div>
      <input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
       <label class="dropdown">
      <div class="dd-button">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.4.1 Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website (Yes or No)</b></a></li></b></div>
      <input type="checkbox" class="dd-input" id="test">

      <!-- <ul class="dd-menu">

      <li><a href=""> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.4.1 Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website (Yes or No)</b></a></li> -->
        <!-- <li><a href="CERTIFICATE COURSE.pdf"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">1.4.1 Communication to the University</b></a></li> -->
      </ul> 
      </label>
    </div>
    <!--  </ul> -->
    </label>
      <li class="divider"></li>
      
    </ul>
    
  </label>
  </tr>
    </td>




<!-- <tr>
  <td>
                 <label class="dropdown">

    <div class="dd-button">
 <b> Criteria 1 - Curricular Aspects</b>
    </div>
  
    <input type="checkbox" class="dd-input" id="test">
  
    <ul class="dd-menu">
       <li><a href="1.2.1 view page.pdf"><b>1.1 – Curriculum Design and Developments</a></li>
    <li><a href="">1.2 - Academic Flexibility</a></li>
    <li><a href="">1.3 – Curriculum Enrichment</a></li>
    <li><a href="">1.4 – Feedback System</b></a></li>
  
      <li class="divider"></li>
      
    </ul>
    
  </label>
  </tr>
    </td> -->
    <tr>
  <td>
               <label class="dropdown" style=" color: #fff;">

    <div class="dd-button"style="background-color: #7f1d1d;">
 <b style="font-family: verdana; color: #fff;"> Criteria 2 - Teaching - Learning and Evaluation</b>
    </div>
  
    <input type="checkbox" class="dd-input" id="test">
  
    <ul class="dd-menu">
       <li><a href="2.1.1 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.1 Enrolment percentage</b></a></li>
      <!--  <li><a href="2.1.1 CERTIFICATE HOI.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.1 CERTIFICATE HOI</b></a></li>
      <li><a href="2.1.1 ACADEMIC YEAR 2018-19_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.1 ACADEMIC YEAR  2018-19_signed</b></a></li>
      <li><a href="2.1.1 ACADEMIC YEAR 2019-20_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.1 ACADEMIC YEAR  2019-20_signed</b></a></li>
      <li><a href="2.1.1 ACADEMIC YEAR 2020-21_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.1 ACADEMIC YEAR  2020-21_signed</b></a></li>
      <li><a href="2.1.1 ACADEMIC YEAR 2021-22_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.1 ACADEMIC YEAR  2021-22_signed</b></a></li>
      <li><a href="2.1.1 ACADEMIC YEAR 2022-23_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.1 ACADEMIC YEAR  2022-23_signed</b></a></li> -->
    <li><a href="2.1.2 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.2 Percentage of seats filled against seats reserved for various categories (SC, ST, OBC, Divyangjan, etc. as per applicable reservation policy during the last five years(Exclusive of super numerary seats)<b></a></li>
      <!-- <li><a href="2.1.2 CERTIFICATE HOI_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.2 CERTIFICATE HOI_signed</b></a></li>
      <li><a href="2.1.2 ACADEMIC YEAR 2018-19_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.2 ACADEMIC YEAR 2018-19_signed</b></a></li>
      <li><a href="2.1.2 ACADEMIC YEAR 2019-20_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.2 ACADEMIC YEAR 2019-20_signed</b></a></li>
      <li><a href="2.1.2 ACADEMIC YEAR 2020-21_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.2 ACADEMIC YEAR 2020-21_signed</b></a></li>
      <li><a href="2.1.2 ACADEMIC YEAR 2021-22_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.2 ACADEMIC YEAR 2021-22_signed</b></a></li>
      <li><a href="2.1.2 ACADEMIC YEAR 2022-23_signed.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.1.2 ACADEMIC YEAR 2022-23_signed</b></a></li> -->
    li><a href="2.2.1 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.2.1 Student –Full time Teacher Ratio(Data for the latest completed academic year)<b></a></li> 
    <li><a href="2.3.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.3.1 Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing</b></a></li>

   <li><a href="2.4.1 Summary.pdf"><b style="font-size: 18px;">&nbsp;&nbsp;&nbsp;2.4.1 Percentage of full-time teachers against sanctioned posts during the last five years</b>
</a></li>  
</a></li>
    <li><a href="2.4.2 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.4.2 Percentage of full time teachers with NET/SET/SLET/ Ph. D. / D.M. /M.Ch. / D.N.B Superspeciality / D.Sc. / D.Litt. during the last fiveyears(consider only highest degreefor count)</b></a></li>
    <li><a href="2.5.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.5.1 Mechanism of internal/ external assessment is transparent and the grievance redressal system is time- bound and efficient</b></a></li>
    <li><a href="2.6.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.6.1. Programme Outcomes (POs) and Course Outcomes (COs) for all Programmes offered by the institution are stated and displayed on website and attainment of POs and COs are evaluated</b></a></li>
    <li><a href="2.6.2.pdf">&nbsp;&nbsp;&nbsp<b style="font-size: 18px;">2.6.2  Attainment of POs and COs are evaluated</b></a></li>

    <li><a href="2.6.3 Summary.pdf">&nbsp;&nbsp;&nbsp<b style="font-size: 18px;">2.6.3 Pass percentage of Students during last five years</b></a></li>
    <li><a href="">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">2.7.1 Online student satisfaction survey regarding to teaching learning process. (Online survey to be conducted)</b></a></li>
  
      <li class="divider"></li>
      
    </ul>
    
  </label>
  </tr>
    </td>
 <tr>
  <td>
                 <label class="dropdown">


     <div class="dd-button">
 <b style="font-family: verdana; color: #7f1d1d;"> Criteria 3 - Research, Innovations and Extension</b>
    </div>
  
    <input type="checkbox" class="dd-input" id="test">
  
    <ul class="dd-menu">
      <li><a href="3.1.1 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">3.1.1 - Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)</b></a></li>
		 

    <li><a href="3.2.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">3.2.1 Institution has created an ecosystem for innovations and has initiatives for creation and transfer of knowledge (patents filed, published, incubation center facilities in the HEI to be considered)</b></a></li>

     <li><a href="3.2.2_Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">3.2.2 - Number of workshops/seminars/conferences including on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship conducted during the last five years</b></a></li>

   <!-- <li><a href="">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">3.3.1 Number of research papers published per teacher in the Journals notified on UGC website during last five years.</b></a></li> -->
    <li><a href="3.3.1 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">3.3.1 Number of research papers published per teacher in the Journals notified on UGC website during last five years.</b>
</a></li>
		<!-- <li><a href="3.3.1 DVV.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;"> 3.3.1 DVV.</b>
</a></li> -->
    <li><a href="3.3.2 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">3.3.2 Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years</b></a></li>

    <li><a href="3.4.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">3.4.1 Extension activities are carried out in the neighborhood community, sensitizing students to social issues, for their holistic development, and impact thereof during the last five years.</b></a></li>

    <li><a href="3.4.2.pdf">&nbsp;&nbsp;&nbsp; <b style="font-size: 18px;">3.4.2 Awards and recognitions received for extension activities from government / government recognised bodies</b></a></li>

     <li><a href="3.4.3 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">3.4.3 Number of extension and outreach programs conducted by the institution through NSS/NCC/Red cross/YRC etc., (including the programmes such as Swachh Bharat, AIDS awareness, Gender issues etc. and/or those organised in collaboration with industry, community and NGOs) during the last five years</b></a></li>




     <li><a href="3.5.1_Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">3.5.1 The number of MoUs, collaborations/linkages for Faculty exchange, Student exchange, Internship, Field trip, On-the- job training, research and other academic activities during the last five years</b></a></li>
  
      <li class="divider"></li>
      
    </ul>
    
  </label>
  </tr>
    </td>

     <tr>
  <td>
                 <label class="dropdown" >

    <div class="dd-button"style="background-color: #7f1d1d;">
 <b style="font-family: verdana; color: #fff;"> Criteria 4 - Infrastructure and Learning Resources</b>
    </div>
  
    <input type="checkbox" class="dd-input" id="test">
    <ul class="dd-menu">
      <label class="dropdown">
      <div class="dd-button"style = "background-color: #b83e12;color:white;">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">4.1 Physical Facilities</b></div>
      <input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
        <li><a href="4.1.1.pdf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">4.1.1 Availability of adequate infrastructure and physical facilities viz., classrooms, laboratories, ICT facilities, cultural activities, gymnasium, yoga centre etc. in the institution.</b></a></li>
    <li><a href="4.1.2 Summary.pdf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;"> 4.1.2 Percentage of expenditure, excluding salary for infrastructure augmentation during last five years (INR in Lakhs)</b></a></li>
		 <!-- <li><a href="CA Certificate 412 441.pdf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">CA Certificate 412 441</b></a></li> -->

      </ul>
    </label>


    <label class="dropdown">
      <div class="dd-button">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">4.2 Library as a learning Resource</div>
      <input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
        <li><a href="4.2.1.pdf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">4.2.1 Library is automated using Integrated Library Management System (ILMS), subscription to e-resources, amount spent on purchase of books, journals and per day usage of library.</b></a></li>
   
      </ul>
    </label>


<label class="dropdown">
      <div class="dd-button"style = "background-color: #b83e12;color:white;">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">4.3 IT Infrastructure</b></div>
      <input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
        <li><a href="4.3.1.pdf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">4.3.1 Institution frequently updates its IT facilities and provides sufficient bandwidth for internet connection</b></a></li>
    <li><a href="4.3.2 Summary.pdf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">4.3.2 Student–Computer ratio (Data for the latest completed academic year)</b></a></li>
      </ul>
    </label>

    <label class="dropdown">
      <div class="dd-button">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">4.4 Maintenance of Campus Infrastructure</b></div>
      <input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
    <li><a href="4.4.1 Summary.pdf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">4.4.1 Percentage of expenditure incurred on maintenance of infrastructure (physical and academic support facilities) excluding salary component during the last five years (INR in Lakhs).</b></a></li>
		 <!-- <li><a href="441 Certificate  of CA.pdf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">441 Certificate  of CA.</b></a></li> -->
      </ul>
    </label>
      <li class="divider"></li>
      
    </ul>
    
  </label>
  </tr>
    </td>


    <tr>
    <td>
    <label class="dropdown">
     <div class="dd-button">
  <b style="font-family: verdana; color: #7f1d1d;">Criteria 5 - Student Support and Progression</b></div>
<input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
      <li><a href="5.1.1_Summary.pdf">&nbsp;&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">5.1.1 Percentage of students benefited by scholarships and freeships provided by the Government and Non-Government agencies during last five years</b></a></li>
      <li><a href="5.1.2_Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;"> 5.1.2 Capacity building and skills enhancement initiatives taken by the institution include the following</b><</a></li>
      <li><a href="5.1.3_Summary sheet.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;"> 5.1.3 Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years</b><</a></li>
     <li><a href="5.1.4_Summary.pdf">&nbsp;&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">5.1.4 The Institution has a transparent mechanism for timely redressal of student grievances including sexual harassment and ragging cases</b></a></li>
      <li><a href="5.2.1_Summary.pdf"><b>&nbsp;&nbsp;&nbsp; <b style="font-size: 18px;"> 5.2.1 Percentage of placement of outgoing students and students progressing to higher education during the last five years</b><
      </a></li>
      </a></li>
      <li><a href="5.2.2_Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">5.2.2 Percentage of students qualifying in state/national/ international level examinations during the last five years (eg: JAM/CLAT/GATE/ GMAT/ CAT/ GRE/ TOEFL/ Civil Services/State government examinations)</b></a></li>
      <li><a href="5.3.1_summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">5.3.1 Number of awards/medals for outstanding performance in sports/ cultural activities at University / state/ national / international level (award for a team event should be counted as one) during the last five years</b></a></li>
      <li><a href="5.3.2_summary final.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">5.3.2 Average number of sports and cultural programs in which students of the Institution participated during last five years (organised by the institution/other institutions)</b></a></li>
      <li><a href="5.4.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">5.4.1 There is a registered Alumni Association that contributes significantly to the development of the institution through financial and/or other support services</b></a></li>
      <li class="divider"></li>
      </ul>
    </label>
    </tr>
    </td>

    <tr>
    <td>
    <label class="dropdown" style=" color: #fff;">

    <div class="dd-button"style="background-color: #7f1d1d;">
  <b style="font-family: verdana; color: #fff;">Criteria 6 - Governance, Leadership and Management</b></div>
<input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
      <li><a href="6.1.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">6.1.1 The governance and leadership is in accordance with vision and mission of the institution and it is visible in various institutional practices such as decentralization and participation in the institutional governance</b></a></li>
      <li><a href="6.2.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">6.2.1 The functioning of the institutional bodies is effective and efficient as visible from policies, administrative setup, appointment and service rules, procedures, deployment of institutional Strategic/ perspective/development plan etc</b></a></li>
     <li><a href="6.2.2_Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">6.2.2 Implementation of e-governance in areas of operation</b></a></li>
      <li><a href="6.3.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">6.3.1 The institution has effective welfare measures and Performance Appraisal System for teaching and non-teaching staff</b></a></li>
      <li><a href="6.3.2_Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">6.3.2 Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years</b></a></li>
      <li><a href="Summary-6.3.3.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">6.3.3 Percentage of teaching and non-teaching staff participating in Faculty development Programmes (FDP), professional development/administrative training programs during the last five years</b></a></li>
      <li><a href="6.4.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">6.4.1 Institution has strategies for mobilization and optimal utilization of resources and funds from various sources (government/ nongovernment organizations) and it conducts financial audits regularly (internal and external)</b></a></li>
      <li><a href="https://csitdurg.in/csit-r&d/iqac.php">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">6.5.1 Internal Quality Assurance Cell (IQAC) has contributed significantly for institutionalizing the quality assurance strategies and processes. It reviews teaching learning process, structures & methodologies of operations and learning outcomes at periodic intervals and records the incremental improvement in various activities</b></a></li>
     <li><a href="6.5.2_Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">6.5.2 Quality assurance initiatives of the institution include:</b></a></li></li>
      <li class="divider"></li>
      </ul>
    </label>
    </tr>
    </td>


    <tr>
    <td>
    <label class="dropdown">
     <div class="dd-button">
 <b style="font-family: verdana; color: #7f1d1d;">Criteria 7 – Institutional Values and Best Practices</b></div>
<input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
      <li><a href="7.1.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">7.1.1 Measures initiated by the Institution for the promotion of gender equity and Institutional initiatives to celebrate/organize national and international commemorative days, events and festivals during the last five years</b></a></li>
      <li><a href="7.1.2 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">7.1.2 The Institution has facilities and initiatives for</b></a></li>
      <li><a href="7.1.3 Summary.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">7.1.3 Quality audits on environment and energy regularly undertaken by the Institution.</b></a></li>
      <li><a href="7.1.4.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">7.1.4 Describe the Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socioeconomic and Sensitization of students and employees to the constitutional obligations: values, rights, duties and responsibilities of citizens.</b></b></a></li>
      <li><a href="7.2.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">7.2.1 Describe two best practices successfully implemented by the Institution as per NAAC format provided in the Manual.</b></a></li>
      <li><a href="7.3.1.pdf">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">7.3.1 Portray the performance of the Institution in one area distinctive to its priority and thrust within 1000 words</b></a></li>
      
      <li class="divider"></li>
      </ul>
    </label>
    </tr>
    </td>
 <tr>
   <td>
    
   <a href="CGCOGN21243.pdf" target="_blank"  ><div id="nil" style=" background-color:#7f1d1d ;height: 40px; padding-left: 22px;" ><b style="font-family: verdana; color: #fff;" > SSR </b></div></a></td>
  </tr>
   <tr>
  <td>
    <label class="dropdown">

    <div class="dd-button">
  <a href="naac_cycle2_dvv_details.php" target="_blank" ><b style="font-family: verdana; color: #7f1d1d;">DVV CLARIFICATION</b>
    </div>
  
    <input type="checkbox" class="dd-input" id="test">
    <ul class="dd-menu">
      <!-- <label class="dropdown">
      <div class="dd-button"style = "background-color: #b83e12;color:white;">&nbsp;&nbsp;&nbsp;<b style="font-size: 18px;">Extended Profile</b></div>
      <input type="checkbox" class="dd-input" id="test">

      <ul class="dd-menu">
        <li><a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;"> Extended 1.1 - Number of students year wise during the last five years</b></a></li>
    <li><a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;"> Extended 2.1 - Number of teaching/Full time teachers year wise during the last five years (Without Repeat Count)</b></a></li>
     <li><a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;">Extended 2.2 - Number of full time teachers year wise during the last five years</b></a></li>
    <li><a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= "color: #7f1d1d;font-size: 16px;"> Extended 3.1 - Expenditure Excluding salary component year wise during the last five years</b></a></li>
      </ul>

    </label> -->
    <li class="divider"></li>
      </ul>
    </label>
    </tr>
    </td>
  

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- listing end -->
    <?php include ('../footer.php');?>