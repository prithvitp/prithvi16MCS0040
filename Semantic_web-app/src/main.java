
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.Literal;
import org.apache.jena.rdf.model.Model;

import org.apache.jena.util.FileManager;

public class main {
	
	public static void main(String args[])
	{
		sparqlTest();
	}
	
	  static void sparqlTest()
	    {
	        FileManager.get().addLocatorClassLoader(main.class.getClassLoader());
	        Model model = FileManager.get().loadModel("C:/Users/Raahul/Documents/NetBeansProjects/WebServices/src/data.rdf");
	        String queryString = 
	                "PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
	                "PREFIX foaf:<http://xmlns.com/foaf/0.1/>" +
	                "SELECT * WHERE { " + 
	                 " ?person foaf:name ?x ." +
	                "}";
	        Query query = QueryFactory.create(queryString);
	        QueryExecution qexec = QueryExecutionFactory.create(query, model);
	        try{
	            
	            ResultSet results  = qexec.execSelect();
	            while(results.hasNext())
	            {
	                QuerySolution soln = results.nextSolution();
	                Literal name= soln.getLiteral("x");
	                System.out.println(name);
	                
	            }
	           
	        } finally
	        {
	            qexec.close();
	        }
	                
	                 
	    
	    }
	}

