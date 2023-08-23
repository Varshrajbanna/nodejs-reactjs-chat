import java.util.Scanner;
public class Arrays {
    public static void main(String[] args) {
        
        Scanner V = new Scanner(System.in);
        System.out.println("enter number");
      int n = V.nextInt();
      int arr[]= new int[n];
      for(int i =0; i<=arr.length-1; i++){
     arr[i]= i+1;
      }
      for(int element : arr){
     System.out.println(element);
        
      }
    }
    
}

