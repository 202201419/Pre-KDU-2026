import java.util.*;

public class ex2 {
    public static void main(String[] args) {
        List<String> list= new ArrayList<>();
        Map<String,Integer> map=new HashMap<>();
        HashSet<String> set=new HashSet<>();

        for(int i=0;i<10;i++){
            Scanner sc=new Scanner(System.in);
            String ticket= sc.nextLine();

            list.add(ticket);
            map.put(ticket, map.getOrDefault(ticket,0)+1);
            set.add(ticket);
        }
        
        System.out.println("ArrayList: "+list);       
        System.out.println("HashMap: "+map);
        System.out.println("HashMap: "+set);
        
    }
}
