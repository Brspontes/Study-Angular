import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    constructor(){
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
    }
}

string sql = "SELECT TOP 10 * FROM OrderDetails";

using (var connection = new SqlConnection(FiddleHelper.GetConnectionStringSqlServerW3Schools()))
{
  var orderDetails = connection.Query<OrderDetail>(sql).ToList();

  FiddleHelper.WriteTable(orderDetails);
}

string sql = "INSERT INTO Customers (CustomerName) Values (@CustomerName);";

using (var connection = new SqlConnection(FiddleHelper.GetConnectionStringSqlServerW3Schools()))
{

  var affectedRows = connection.Execute(sql, new {CustomerName = "Mark"});

  Console.WriteLine(affectedRows);
}







public void SimpleRead()
{
  // declare the SqlDataReader, which is used in
  // both the try block and the finally block
  SqlDataReader rdr = null;

  // create a connection object
  SqlConnection conn = new SqlConnection(
  "Data Source=(local);Initial Catalog=Northwind;Integrated Security=SSPI");

  // create a command object
  SqlCommand cmd  = new SqlCommand(
  "select * from Customers", conn);

  try
  {
    // open the connection
    conn.Open();

    // 1. get an instance of the SqlDataReader
    rdr = cmd.ExecuteReader();

    // print a set of column headers
    Console.WriteLine(
      "Contact Name             City                Company Name");
    Console.WriteLine(
      "------------             ------------        ------------");

    // 2. print necessary columns of each
    record
    while (rdr.Read())
    {
      // get the results of each column
      string contact = (string)rdr["ContactName"];
      string company = (string)rdr["CompanyName"];
      string city    = (string)rdr["City"];

      // print out the results
      Console.Write("{0,-25}", contact);
      Console.Write("{0,-20}", city);
      Console.Write("{0,-25}", company);
      Console.WriteLine();
    }
  }
  finally
  {
    // 3. close the reader
    if (rdr != null)
    {
      rdr.Close();
    }

    // close the connection
    if (conn != null)
    {
      conn.Close();
    }
  }
}









