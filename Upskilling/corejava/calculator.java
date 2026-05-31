import java.util.*;
public class calculator{
    public static void main (String args[]){
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();
        char ch=sc.next().charAt(0);
        int res=0;
        switch(ch)
        {
            case '+':
                res=a+b;
                System.out.println(res);
                break;
            case '-':
                res=a-b;
                System.out.println(res);
                break;
            case '*':
                res=a*b;
                System.out.println(res);
                break;
            case '/':
                res=a/b;
                System.out.println(res);
                break;
            default:
                System.out.println("Invalid");
        }
    }
}