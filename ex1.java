import java.util.*;

public class ex1{
    public static void main(String[] args){
    Scanner sc1=new Scanner(System.in);
    Scanner sc2=new Scanner(System.in);
    String s1=sc1.nextLine();
    String s2=sc2.nextLine();
    boolean flag=false;
    
    int len1= s1.length();
    int len2= s2.length();
    if(len1!=len2){
        System.out.println("Lengths match: false");
        System.out.println("Strings match: false");
    }
    else{
        System.out.println("Lengths match: true");
        if(s1.equals(s2)){
            System.out.println("Strings match: true");
        }
        else{
            System.out.println("Strings match: false");
        }
        // for(int i=0;i<len1;i++){
        //     char c1=s1.charAt(i);
        //     char c2=s2.charAt(i);
        //     if(c1!=c2 && !flag){
        //         System.out.println("Strings match: false");
        //         flag=true;
        //     }
        // }
        // if(!flag){
        //     System.out.println("Strings match: true");
        // }
    }
}
}