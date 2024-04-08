public class Application {

    public static void main(String[] args) {
        int count = 0;
        count = count + 10;
        System.out.println(count);
        OuterClass outerClass = new OuterClass();
        OuterClass.NestedClass nestedClass = outerClass.new NestedClass();
        nestedClass.doNothing();
        OuterClass.StaticNestedClass staticNestedClass = new OuterClass.StaticNestedClass();
    }

}
