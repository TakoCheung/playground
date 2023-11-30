public class interview {
  /*Implement a program where given two strings, returns whether the two are anagrams.
  Anagram:
  - Letters appear equal number of times.
  - Order can be different.*/ // aabb abba : true| aabb abba : false 
  public static void writeNums(int n){
    System.out.println(n);
    if(n < 1 ){
      throw new IllegalArgumentException("");
    }
    if(n == 1){
      return;
    }
    writeNums(n-1);
  }

  public static boolean anagrams(String a, String b){
    char[] aArray = a.toCharArray();
    char[] bArray = b.toCharArray();
    //sort?
    if(aArray.length != bArray.length){
      return false;
    }
    else {
      for (int i = 0; i < aArray.length; i++) {
        if(aArray[i] != bArray[i]){
          return false;
        }
      }
    }
    return true;
  }
  
  public static void main(String[] args) {
    // System.out.println("aabb | aabb : "+anagrams("aabb", "aabb"));
    // System.out.println("aabb | abba : "+anagrams("aabb", "abba"));
    writeNums(12);
  }
}
