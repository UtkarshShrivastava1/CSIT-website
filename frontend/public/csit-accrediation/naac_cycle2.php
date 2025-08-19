<?php 
session_start();
include('../includes/config.php');
    ?>

<?php include ('../header.php');?>
    <!-- listing start -->
    <div class="container-fluid">
        <div class="row py-3">
            <div class="col-md-2 ">
                 <div class="list-group ">
                  <a href="naac_cycle1.php" class="list-group-item list-group-item-action ">NAAC Cycle1</a>
                  <a href="naac_cycle2.php" class="list-group-item list-group-item-action active">NAAC Cycle2</a>
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
                                    <thead>
                                        <tr>
                                            <th>Cycle2</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Self Study Report (SSR) Cycle2</td>
                                              
                                            <td><a href="naac_cycle2_deatils.php" target="_blank" class="btn btn-primary">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>Certificate</td>
                                            <td><a href="" target="_blank" class="btn btn-primary">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>Report</td>
                                            <td><a href="" target="_blank" class="btn btn-primary">View</a></td>
                                        </tr>
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