import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ex3 {
    public static void main(String[] args) {
        HashMap<String,Integer> map=new HashMap<>();
        try {
            Scanner sc = new Scanner(new File("data.csv"));

            while (sc.hasNextLine()) {
                String line = sc.nextLine();      

                String[] parts = line.split(","); 

                for (String value : parts) {
                    map.put(value,map.getOrDefault(value, 0)+1);
                }
            }

            sc.close();

        } catch (FileNotFoundException e) {
            System.out.println("File not found!");
        }

        map.entrySet()
           .stream()
           .sorted((a, b) -> b.getValue() - a.getValue())   
           .limit(3)
           .forEach(entry -> 
                System.out.println(entry.getKey() + " = " + entry.getValue()));
    }
}
