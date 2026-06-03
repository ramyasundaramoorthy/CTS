import java.io.*;
import java.net.*;

public class Client {
    public static void main(String[] args) {

        try {

            Socket socket =
                    new Socket("localhost", 5000);

            PrintWriter out =
                    new PrintWriter(socket.getOutputStream(), true);

            out.println("Hello Server");

            socket.close();

        } catch(Exception e) {

            System.out.println(e);
        }
    }
}